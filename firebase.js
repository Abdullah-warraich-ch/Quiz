// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOpd3rydF_v9wVnxaFyXtpMgVmgqnZ9vw",
  authDomain: "quizdot-52c4b.firebaseapp.com",
  projectId: "quizdot-52c4b",
  storageBucket: "quizdot-52c4b.firebasestorage.app",
  messagingSenderId: "152127384776",
  appId: "1:152127384776:web:538160a95fc46cc6b109fd",
  measurementId: "G-4R4B79LBNM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
const database = getDatabase(app);
export const db = getFirestore(app);

export { app, analytics, database };
