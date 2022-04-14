import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu6P51iVrF3QiYebJJk3k5h-tq-C5_DME",
  authDomain: "responsive-react-website-83734.firebaseapp.com",
  projectId: "responsive-react-website-83734",
  storageBucket: "responsive-react-website-83734.appspot.com",
  messagingSenderId: "1083344246057",
  appId: "1:1083344246057:web:b4706c6a35ab3e31591338",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
