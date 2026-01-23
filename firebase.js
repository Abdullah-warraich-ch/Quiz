// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOpd3rydF_v9wVnxaFyXtpMgVmgqnZ9vw",
  authDomain: "quizdot-52c4b.firebaseapp.com",
  projectId: "quizdot-52c4b",
  storageBucket: "quizdot-52c4b.firebasestorage.app",
  messagingSenderId: "152127384776",
  appId: "1:152127384776:web:538160a95fc46cc6b109fd",
  measurementId: "G-4R4B79LBNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);