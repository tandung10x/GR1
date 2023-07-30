// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {  GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjueLmkaCyAVpcxj9v-F9jfP-kHXvmm3U",
    authDomain: "homestays-system-394117.firebaseapp.com",
    projectId: "homestays-system-394117",
    storageBucket: "homestays-system-394117.appspot.com",
    messagingSenderId: "701329544440",
    appId: "1:701329544440:web:28b2ce227f2cf7a165d70d",
    measurementId: "G-QPTVSPQDGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
