import firebase from 'firebase/compat/app' 
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import  'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAPsQx5xL8F5JSNDXLfiRWb9iX9HREcAQ4",
    authDomain: "fir-f7ec6.firebaseapp.com",
    projectId: "fir-f7ec6",
    storageBucket: "fir-f7ec6.appspot.com",
    messagingSenderId: "999759570947",
    appId: "1:999759570947:web:f7b0dfc294935f9e0c4636",
    measurementId: "G-7FCHBNL9TV"
  };

 export default firebase.initializeApp(firebaseConfig)
