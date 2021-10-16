import firebase from 'firebase/app';
import 'firebase/auth';
import {authen} from './firebase';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

export function logoutUser() {
  authen.signOut();
}

export async function signUpUser({name, email, password}) {
  try {
    const {user} = await authen.createUserWithEmailAndPassword(email, password);
    await authen.currentUser.updateProfile({
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

// HERE OLD

// import React, {useState} from 'react';
// import auth from '@react-native-firebase/auth';
// import firebase from 'firebase/app';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import {
//   AccessToken,
//   LoginManager,
//   GraphRequest,
//   GraphRequestManager,
// } from 'react-native-fbsdk-next';
// import {resolvePlugin} from '@babel/core';

// export const AuthContext = React.createContext();

// export const AuthProvider = ({children}) => {
//   const [user, setUser] = useState(null);

//   const facebooklogin = resCallBack => {
//     LoginManager.logOut();
//     return (
//       LoginManager.logInWithPermissions(['public_profile', 'email']).then(
//         result => {
//           console.log('fb result ==> ', result);
//           if (
//             result.declinedPermissions &&
//             result.declinedPermissions.includes('email')
//           ) {
//             resCallBack({message: 'Email Is Required'});
//           }
//           if (result.isCancelled) {
//             console.log('error');
//           } else {
//             const infoRequest = new GraphRequest(
//               '/me?fields=email,name',
//               null,
//               resCallBack,
//             );
//             new GraphRequestManager().addRequest(infoRequest).start();
//           }
//         },
//       ),
//       function (error) {
//         console.log('Login Failed with error: ' + error);
//       }
//     );
//   };

//   function _responseInfoCallback(error, result) {
//     if (error) {
//       console.log('Error fetching data: ' + error);
//     } else {
//       const data = result;
//       console.log('Success fetching data: ' + data.name);
//     }
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         setUser,
//         login: async (email, password) => {
//           try {
//             await auth().signInWithEmailAndPassword(email, password);
//           } catch (error) {
//             return {
//               error: error.message,
//             };
//           }
//         },
//         googleLogin: async () => {
//           // Get the users ID token
//           const {idToken} = await GoogleSignin.signIn();

//           // Create a Google credential with the token
//           const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//           // Sign-in the user with the credential
//           await auth().signInWithCredential(googleCredential);
//         },
//         onFbLogin: async () => {
//           try {
//             await facebooklogin(_responseInfoCallback);
//           } catch (error) {
//             return {
//               error: error.message,
//             };
//           }
//         },
//         register: async (email, password, name) => {
//           try {
//             const {user} = await auth().createUserWithEmailAndPassword(
//               email,
//               password,
//             );
//             await firebase.auth().currentUser.updateProfile({
//               displayName: name,
//             });
//             return {user};
//           } catch (error) {
//             return {
//               error: error.message,
//             };
//           }
//         },
//         logout: async () => {
//           try {
//             await auth().signOut();
//           } catch (e) {
//             console.log(e);
//           }
//         },
//       }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
