import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAhH4zoxhVKRrBFjv1mVDIGOJnYvp-PuJY",
  authDomain: "korzinka-redux.firebaseapp.com",
  projectId: "korzinka-redux",
  storageBucket: "korzinka-redux.appspot.com",
  messagingSenderId: "297132044644",
  appId: "1:297132044644:web:a463cdbb24dfd89ef1ca71",
  measurementId: "G-C4WSDBNQM1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
