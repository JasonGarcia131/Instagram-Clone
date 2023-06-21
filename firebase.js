import firebase from 'firebase'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg_OvSXDNJRKZDfkak9XN32XV4VbV_fIo",
  authDomain: "instagram-clone-131.firebaseapp.com",
  projectId: "instagram-clone-131",
  storageBucket: "instagram-clone-131.appspot.com",
  messagingSenderId: "210543655491",
  appId: "1:210543655491:web:7be5189535cdcd2dfa32f6"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase