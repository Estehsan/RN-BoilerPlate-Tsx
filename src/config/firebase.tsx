import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
// import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC0P4wtHZSsAEY9BkuKvPOGVWRYNyYFqDA',
  authDomain: 'tsxfirebase.firebaseapp.com',
  projectId: 'tsxfirebase',
  storageBucket: 'tsxfirebase.appspot.com',
  messagingSenderId: '75118731471',
  appId: '1:75118731471:web:a2944df4d6b0183a2a17ba',
  measurementId: 'G-52MV76YDQJ',
}; //this is where your firebase app values you copied will go

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export {db, auth};
