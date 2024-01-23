import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtF99x4DcCQ_uW5DLMDg9HJ0pHVvnXCns",
  authDomain: "cart-8c5a3.firebaseapp.com",
  projectId: "cart-8c5a3",
  storageBucket: "cart-8c5a3.appspot.com",
  messagingSenderId: "1084397181492",
  appId: "1:1084397181492:web:162330c00f20057f9b4861"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
