// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-c11cd.firebaseapp.com",
  projectId: "realestate-c11cd",
  storageBucket: "realestate-c11cd.appspot.com",
  messagingSenderId: "3461807319",
  appId: "1:3461807319:web:a53b181fb9ebb9d3044492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);