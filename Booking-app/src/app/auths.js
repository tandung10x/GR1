import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth, db, provider } from "../app/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";

// This code is for fetching User data
export function useAuth() {
	const [authUser, authLoading, error] = useAuthState(auth);
	const [isLoading, setLoading] = useState(true);
	const [userinfo, setUserinfo] = useState({});

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const ref = doc(db, "userinfo", authUser.uid);
			const docSnap = await getDoc(ref);
			setUserinfo(docSnap.data());
			setLoading(false);
		}

		if (!authLoading) {
			if (authUser) fetchData();
			else setLoading(false); // Not signed in
		}
	}, [authUser, authLoading]);

	return { userinfo, isLoading, error };
}

export function useGoogleLogin() {
	const [isGoogleLoading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function googleLogin(redirectTo = "/") {
		setLoading(true);

		try {
			const result = await signInWithPopup(auth, provider);
			const name = result.user.displayName;
			const email = result.user.email;
			const uid = result.user.uid;
			
			await setDoc(doc(db, "userinfo", uid), {
				username: name,
				email_: email,
			});
			
			navigate("/");
			//return result.user;
		} catch (error) {			
			setLoading(false);
		} finally {
			setLoading(false);
		}
	}

	return { googleLogin, isGoogleLoading };
}

export function useLogout() {
	const [signOut, isLoading] = useSignOut(auth);
	const navigate = useNavigate();

	async function logout() {
		if (await signOut()) {
			navigate("/user-login");
		}
	}

	return { logout, isLoading };
}