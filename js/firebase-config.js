// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgBhkRDr24rL5lCanJNqj9jfvMIrbODrY",
  authDomain: "si-analytics-academy.firebaseapp.com",
  projectId: "si-analytics-academy",
  storageBucket: "si-analytics-academy.firebasestorage.app",
  messagingSenderId: "162447510839",
  appId: "1:162447510839:web:75b4348257be24552e5eb2",
  measurementId: "G-6H1L04S7QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);