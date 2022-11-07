// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase';
import { getFireStore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXO--tVqEyKcfI1Q0RJZS6yQbKeZP0PCM",
    authDomain: "fullstack-react-8c32d.firebaseapp.com",
    projectId: "fullstack-react-8c32d",
    storageBucket: "fullstack-react-8c32d.appspot.com",
    messagingSenderId: "881929837517",
    appId: "1:881929837517:web:b979b7b304ad46e04ac284",
    measurementId: "G-2M9KDM5STV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFireStore(app);