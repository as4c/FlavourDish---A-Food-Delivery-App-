// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// const {VITE_API_KEY, VITE_AUTH_DOMAIN, VITE_PROJECT_ID, VITE_STORAGE_BUCKET, VITE_MESSAGEING_SENDER_ID, VITE_APP_ID, VITE_MEASUREMENT_ID} = process.env

const firebaseConfig = {
  apiKey:  import.meta.env.VITE_API_KEY,
  authDomain:  import.meta.env.VITE_AUTH_DOMAIN,
  projectId:  import.meta.env.VITE_PROJECT_ID,
  storageBucket:  import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId:  import.meta.env.VITE_MESSAGEING_SENDER_ID,
  appId:  import.meta.env.VITE_APP_ID, 
  measurementId:  import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;