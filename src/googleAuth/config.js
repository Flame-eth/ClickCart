import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCstz6dVKLzjUdv8k7DqeMZaDSttmIlKwQ",
  authDomain: "clickcart-525ce.firebaseapp.com",
  projectId: "clickcart-525ce",
  storageBucket: "clickcart-525ce.appspot.com",
  messagingSenderId: "903894404293",
  appId: "1:903894404293:web:e32f8c3fe08715d2ff34ac",
  measurementId: "G-1WE4B494GS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
