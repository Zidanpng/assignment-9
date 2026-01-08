import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGh7NQSjrhdDZeEcTq2QX_SuD7MIlDWvs",
  authDomain: "pet-care-d7542.firebaseapp.com",
  projectId: "pet-care-d7542",
  storageBucket: "pet-care-d7542.firebasestorage.app",
  messagingSenderId: "871876759488",
  appId: "1:871876759488:web:d3f046d8288adaf155c225",
  measurementId: "G-6S5C7LGJX7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
