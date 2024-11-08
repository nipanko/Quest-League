// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //apiKey: process.env.API_KEY,
  apiKey: 'AIzaSyBZGfqwDI_MTwyj8AoDA4EI1FneVcmWaOc',
  authDomain: "https://quest-league.vercel.app/",
  projectId: "children-f4869",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
