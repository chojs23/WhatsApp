import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAfIjQOVPxSc4dJl2ruC07ksYz6EuG4e7g',
  authDomain: 'whatsapp-clone-e4b37.firebaseapp.com',
  databaseURL: 'https://whatsapp-clone-e4b37.firebaseio.com',
  projectId: 'whatsapp-clone-e4b37',
  storageBucket: 'whatsapp-clone-e4b37.appspot.com',
  messagingSenderId: '1089031789295',
  appId: '1:1089031789295:web:b1fa791b619d76ca60d91a',
  measurementId: 'G-7L25LR98EZ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
