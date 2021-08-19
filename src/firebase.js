import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAzvMkNdlz2ItAgmNCjh296Icsd3CqvBBQ",
    authDomain: "linkedin-clone-yt-e980a.firebaseapp.com",
    projectId: "linkedin-clone-yt-e980a",
    storageBucket: "linkedin-clone-yt-e980a.appspot.com",
    messagingSenderId: "655288628763",
    appId: "1:655288628763:web:40fcf12de240555886eabe"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

