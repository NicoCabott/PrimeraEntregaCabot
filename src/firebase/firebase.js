import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDkGiOs9ujYbTcmGKfcL2haHQCnxzi3Ybg",
    authDomain: "entregareact.firebaseapp.com",
    projectId: "entregareact",
    storageBucket: "entregareact.appspot.com",
    messagingSenderId: "819323883927",
    appId: "1:819323883927:web:fc8536f986848ce25f74d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)