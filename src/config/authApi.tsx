import firebase from 'firebase/app';
import 'firebase/auth';
import {authen, db} from './firebase';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
// import authen as auth from '@react-native-firebase/auth';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {Alert, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function logoutUser() {
  auth().signOut();
}

export async function signUpUser({name, email, password}) {
  try {
    const res = await authen.createUserWithEmailAndPassword(email, password);
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
    const {user} = await authen.signInWithEmailAndPassword(email, password);
    return {user};
  } catch (error) {
    return {
      error: error.message,
    };
  }
}

export const sendEmailWithPassword = async email => {
  try {
    await authen.sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
export const fbLogin = async () => {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
};

export const signInWithGoogle = async () => {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};
