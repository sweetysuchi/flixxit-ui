import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAlTPnGKRx19dSJWmOfDgkafJnG3rUUNG4",
  authDomain: "react-flixxit-759a7.firebaseapp.com",
  projectId: "react-flixxit-759a7",
  storageBucket: "react-flixxit-759a7.appspot.com",
  messagingSenderId: "926506922460",
  appId: "1:926506922460:web:16faf785195db48cdb9f19",
  measurementId: "G-8LXVPGRM2R"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);