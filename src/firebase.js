// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// ✅ Your Firebase configuration (Muneeb's API)
const firebaseConfig = {
  apiKey: "AIzaSyCqdrD27VLqigh_Ryg0dTxpag90jqEFxdQ",
  authDomain: "smit-hackhaton.firebaseapp.com",
  projectId: "smit-hackhaton",
  storageBucket: "smit-hackhaton.firebasestorage.app",
  messagingSenderId: "927551186887",
  appId: "1:927551186887:web:a5ee54e87434751f0b9be2",
  measurementId: "G-VQN0W01ZC7",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Firebase Authentication Setup
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// ✅ Export app (for use in other files if needed)
export default app;
