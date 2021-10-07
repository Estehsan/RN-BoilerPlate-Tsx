import firebase from 'firebase/app';
import 'firebase/auth';
import {auth, db} from './firebase';
export function logoutUser() {
  auth.signOut();
}

export async function signUpUser({name, email, password}) {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection('users').add({
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}
export async function loginUser({email, password}) {
  try {
    const {user} = await auth.signInWithEmailAndPassword(email, password);
    return {user};
  } catch (error) {
    return {
      error: error.message,
    };
  }
}

export const sendEmailWithPassword = async email => {
  try {
    await auth.sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    return {
      error: error.message,
    };
  }
};