// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV87iJlqNYvYrl_TMchYhQn6_fZIqrn3U",
  authDomain: "authenticationpractice-9fc3b.firebaseapp.com",
  projectId: "authenticationpractice-9fc3b",
  storageBucket: "authenticationpractice-9fc3b.appspot.com",
  messagingSenderId: "1052866085219",
  appId: "1:1052866085219:web:9da4c2a6adadb36b439356",
  measurementId: "G-7ECNXS8ETY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;