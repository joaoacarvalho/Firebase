import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBUv1MJE9u-rTCC952J_VPkbKlH3Ga6d18",
  authDomain: "jhoowallet.firebaseapp.com",
  projectId: "jhoowallet",
  storageBucket: "jhoowallet.appspot.com",
  messagingSenderId: "1064050720920",
  appId: "1:1064050720920:web:34a02fd0afeace120310ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
