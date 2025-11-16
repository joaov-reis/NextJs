// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbV22HZHOvOa__TuOm-kcnN4vPaqqY-YQ",
  authDomain: "estudos-jamstack.firebaseapp.com",
  projectId: "estudos-jamstack",
  storageBucket: "estudos-jamstack.firebasestorage.app",
  messagingSenderId: "435174038788",
  appId: "1:435174038788:web:78dd72e73031b3eae44451",
  measurementId: "G-2WRQVBTBB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);