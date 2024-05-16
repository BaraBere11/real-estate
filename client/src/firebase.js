// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_KEY,
  authDomain: "realestate-1fc9e.firebaseapp.com",
  projectId: "realestate-1fc9e",
  storageBucket: "realestate-1fc9e.appspot.com",
  messagingSenderId: "106616749696",
  appId: "1:106616749696:web:608c1f92ae643f68b43065"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
