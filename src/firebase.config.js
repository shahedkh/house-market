import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAvh_t4uqEo_FRMdysperXfmlarm4tYTCY",
  authDomain: "house-market-6c724.firebaseapp.com",
  projectId: "house-market-6c724",
  storageBucket: "house-market-6c724.appspot.com",
  messagingSenderId: "894436705894",
  appId: "1:894436705894:web:4344c791d0564ceeaf8fa7",
  measurementId: "G-TFWEL6HWEG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()