import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBf5c4YHHwVaXjUi_a88opzYGd75Y__UAg",
    authDomain: "react-pet-18b5e.firebaseapp.com",
    projectId: "react-pet-18b5e",
    storageBucket: "react-pet-18b5e.appspot.com",
    messagingSenderId: "66957790994",
    appId: "1:66957790994:web:9148accfa7fc33d88fedcb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
