import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCLn2x0gmvwG3DoT2FKnMpjLXCcibsNfG4",
  authDomain: "travellers-fd65f.firebaseapp.com",
  projectId: "travellers-fd65f",
  storageBucket: "travellers-fd65f.appspot.com",
  messagingSenderId: "336811235361",
  appId: "1:336811235361:web:34d805d10ec0592f1deb60",
  measurementId: "G-YJKLCSHJG5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};