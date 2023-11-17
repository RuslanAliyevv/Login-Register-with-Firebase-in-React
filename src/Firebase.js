import React from 'react'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCce5OF1W_hmt3JJUf70ouJSJG6jP0dRY",
  authDomain: "caviar-e6d3e.firebaseapp.com",
  projectId: "caviar-e6d3e",
  storageBucket: "caviar-e6d3e.appspot.com",
  messagingSenderId: "591734203575",
  appId: "1:591734203575:web:5c874e07dd5f5e3cfe5932",
  measurementId: "G-FL2SV71RVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

