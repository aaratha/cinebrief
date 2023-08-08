// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1AjMN-chx65iw_I8fQ3Ml4hgwi6anUw8",
    authDomain: "cinebrief-2474c.firebaseapp.com",
    projectId: "cinebrief-2474c",
    storageBucket: "cinebrief-2474c.appspot.com",
    messagingSenderId: "114281337226",
    appId: "1:114281337226:web:14d0ee7e9b1fc6f8487873",
    measurementId: "G-R1PJVD29TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;