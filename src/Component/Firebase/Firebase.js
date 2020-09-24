import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBsAkbn3XR6Spfyaa-n7XnNznjFXu4AD0A",
    authDomain: "facebook-clone-e0681.firebaseapp.com",
    databaseURL: "https://facebook-clone-e0681.firebaseio.com",
    projectId: "facebook-clone-e0681",
    storageBucket: "facebook-clone-e0681.appspot.com",
    messagingSenderId: "677503138480",
    appId: "1:677503138480:web:d9903e85d40ccca6f01975",
    measurementId: "G-YCF2LF301E"
  }
  const fire =firebase.initializeApp(firebaseConfig);
  const db=fire.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
 