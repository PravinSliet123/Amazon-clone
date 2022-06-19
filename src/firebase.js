// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = initializeApp({
    apiKey: "AI zaSyDe2bgZYU3Qnvax7T6MPIXQtmBgkO2qLeo",
    authDomain: "cloneproject-ebaf8.firebaseapp.com",
    projectId: "cloneproject-ebaf8",
    storageBucket: "cloneproject-ebaf8.appspot.com",
    messagingSenderId: "760655606901",
    appId: "1:760655606901:web:09d601183ffafe7f8cf43c",
    measurementId: "G-WF7WWJCQV6"
  });
  
  const auth =getAuth(firebaseConfig)
  export  {auth};