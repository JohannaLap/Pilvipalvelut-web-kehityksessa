









import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZUli0z9b6LpsuTDa9S5if6O0vM6eaeiI",
  authDomain: "harjoitus-26e21.firebaseapp.com",
  projectId: "harjoitus-26e21",
  storageBucket: "harjoitus-26e21.firebasestorage.app",
  messagingSenderId: "709385207330",
  appId: "1:709385207330:web:b0f653e8976bd66387147b",
  measurementId: "G-B3F53D0CPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db }; 