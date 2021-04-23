import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpd4fhT5n-AP33UJakBL8RCfApmHxlUEk",
    authDomain: "snap-library.firebaseapp.com",
    projectId: "snap-library",
    storageBucket: "snap-library.appspot.com",
    messagingSenderId: "394184369068",
    appId: "1:394184369068:web:b453932b0abc9543a45009"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projStorage = firebase.storage();
  const projFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projStorage, projFirestore, timestamp };