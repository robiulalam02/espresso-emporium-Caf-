import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmDrXCkK4VuQxHf_uxytuxjX0RAha1SF0",
  authDomain: "espresso-emporium-auth-78a8c.firebaseapp.com",
  projectId: "espresso-emporium-auth-78a8c",
  storageBucket: "espresso-emporium-auth-78a8c.firebasestorage.app",
  messagingSenderId: "364920702146",
  appId: "1:364920702146:web:9df723dceca9818e1e675b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);