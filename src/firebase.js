import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2ngVnStMxgEbcVA-TFQFewjisQm9PClA",
  authDomain: "disneyplus-clone-ca370.firebaseapp.com",
  projectId: "disneyplus-clone-ca370",
  storageBucket: "disneyplus-clone-ca370.appspot.com",
  messagingSenderId: "164766400694",
  appId: "1:164766400694:web:a0ed02187ab71019036617",
  measurementId: "G-VC0CGT3KX2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
