// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyBFDhsMMJ7o_p9_K6JrAYdvfsUk0a8O5xc",
  authDomain: "saloon-23801.firebaseapp.com",
  projectId: "saloon-23801",
  storageBucket: "saloon-23801.appspot.com",
  messagingSenderId: "168044231656",
  appId: "1:168044231656:web:881db4993feebc76b1c25d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


export {db}