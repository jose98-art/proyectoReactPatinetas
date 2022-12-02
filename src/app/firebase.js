// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBePt326M_pQIhDyoHZmMJDwUmPCAHP5as",
  authDomain: "ecomerscoder.firebaseapp.com",
  projectId: "ecomerscoder",
  storageBucket: "ecomerscoder.appspot.com",
  messagingSenderId: "220320152826",
  appId: "1:220320152826:web:a04780e194699334945d43",
  measurementId: "G-8X9J58QCDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);