// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX8j5ycuxB_EyHpyIssmC7agp5u8FmDEo",
  authDomain: "foodie-77440.firebaseapp.com",
  projectId: "foodie-77440",
  storageBucket: "foodie-77440.appspot.com",
  messagingSenderId: "883409489398",
  appId: "1:883409489398:web:fe9ddb064e1ad8ca7d4bd7",
  measurementId: "G-5EV20WL7K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;