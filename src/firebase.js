// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhc26HIkOxRwN0hFvhYMuEyc1_uVS8M1g",
  authDomain: "movie-app-gp.firebaseapp.com",
  projectId: "movie-app-gp",
  storageBucket: "movie-app-gp.appspot.com",
  messagingSenderId: "765318951486",
  appId: "1:765318951486:web:577ed9dd6e45286a2dd76f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// my firebase info and work that i need to implemet first before using
