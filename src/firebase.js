import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdivaDq3TcpJvdTthkj2vT_4Bjsx2UrGs",
    authDomain: "clone-36dd4.firebaseapp.com",
    projectId: "clone-36dd4",
    storageBucket: "clone-36dd4.appspot.com",
    messagingSenderId: "661106803867",
    appId: "1:661106803867:web:448277761b9694d712b23e",
    measurementId: "G-H5YMY44GX7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}