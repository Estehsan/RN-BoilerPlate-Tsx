import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import {FIREBASE_CONFIG} from './keys';
// import firebase from 'firebase';

const firebaseConfig = FIREBASE_CONFIG;

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const authen = firebase.auth();

export {db, authen};
