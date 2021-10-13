import firebase from 'firebase/app';
import 'firebase/auth';
import {authen} from './firebase';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

export function logoutUser() {
  auth().signOut();
}

export async function signUpUser({name, email, password}) {
  try {
    const {user} = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await firebase.auth().currentUser.updateProfile({
      displayName: name,
    });
    return {user};
  } catch (error) {
    return {
      error: error.message,
    };
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
      error: error,
    };
  }
};
export const fbLogin = async () => {
  try {
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
    await auth().signInWithCredential(facebookCredential);
    // dispatch(setUser(_firebaseUserCredential));
  } catch (error) {
    return {
      error: error,
    };
  }
};

export const signInWithGoogle = async () => {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};
