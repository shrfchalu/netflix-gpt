// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMH604krGzOcB6AbjwRR1okwcfqJosbik",
  authDomain: "shrfx-ab2c1.firebaseapp.com",
  projectId: "shrfx-ab2c1",
  storageBucket: "shrfx-ab2c1.appspot.com",
  messagingSenderId: "1084502041931",
  appId: "1:1084502041931:web:c959764e8d15715cdc74ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
