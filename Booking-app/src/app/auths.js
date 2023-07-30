import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth, db, provider } from "../app/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";

// This code is for fatching User data
export function useAuth() {
	const [authUser, authLoading, error] = useAuthState(auth);
	const [isLoading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const ref = doc(db, "users", authUser.uid);
			const docSnap = await getDoc(ref);
			setUser(docSnap.data());
			setLoading(false);
		}

		if (!authLoading) {
			if (authUser) fetchData();
			else setLoading(false); // Not signed in
		}
	}, [authLoading]);

	return { user, isLoading, error };
}

export function useGoogleLogin() {
	const [isGoogleLoading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	async function googleLogin() {
		setLoading(true);

		try {
			const result = await signInWithPopup(auth, provider);
			console.log(result);
			setName(result.user.displayName);
			setEmail(result.user.email);
			//const uid = result.user.uid;
			// const userData = {
			// 	name: name,
			// 	email: email,
			// 	// Add other user data if needed
			// };
			// await setDoc(doc(db, "users", uid), {
			// 	id: uid,
			// 	username: name.toLowerCase(),
			// 	avatar: "",
			// 	date: Date.now(),
			// });
			getNameEmail(name, email);
			navigate("/");
		} catch (error) {
			alert("Logging in failed");
			setLoading(false);
		} finally {
			setLoading(false);
		}
	}

	return { googleLogin, isGoogleLoading };
}

export function getNameEmail(name, email) {
	return {name, email};
}

export function useLogout() {
	const [signOut, isLoading] = useSignOut(auth);
	const navigate = useNavigate();

	async function logout() {
		if (await signOut()) {
			alert("You are logged out");
			navigate("/user-login");
		}
	}

	return { logout, isLoading };
}