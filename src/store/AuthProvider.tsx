import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firebase from 'firebase/app';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  Profile,
} from 'react-native-fbsdk-next';
import {authen} from '../config/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [users, setUsers] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        users,
        setUsers,
        login: async (email, password) => {
          try {
            // const {user} = await firebase;
            await auth().signInWithEmailAndPassword(email, password);

            // return {user};
          } catch (error) {
            return {
              error: error.message,
            };
          }
        },
        googleLogin: async () => {
          // Get the users ID token
          const {idToken} = await GoogleSignin.signIn();

          // Create a Google credential with the token
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);

          // Sign-in the user with the credential
          await auth().signInWithCredential(googleCredential);
          // const currentUser = await GoogleSignin.getCurrentUser();

          // return setUsers(currentUser);
          const currentUser = await GoogleSignin.getCurrentUser();
          // console.log('This is Curretn ====> ', currentUser?.user);
          return setUsers(currentUser.user);
        },
        onFbLogin: async () => {
          try {
            // Facebook Auth
            LoginManager.logOut();
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
            await auth()
              .signInWithCredential(facebookCredential)
              .then(result => {
                alert('Loged In with Facebook');
                console.log(
                  'This is Login====>',
                  result.additionalUserInfo?.profile,
                );
                const AllData = result.additionalUserInfo.profile;
                setUsers(AllData);
              });
          } catch (error) {
            return {
              error: error.message,
            };
          }
        },
        register: async (email, password, name) => {
          try {
            const {user} = await authen.createUserWithEmailAndPassword(
              email,
              password,
            );
            await authen.currentUser.updateProfile({
              displayName: name,
            });
            return {user};
          } catch (error) {
            return {
              error: error.message,
            };
          }
        },
        logout: async () => {
          try {
            await auth()
              .signOut()
              .then(() => alert('Your are signed out!'));
            setUsers(null);

            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            await LoginManager.logOut();
          } catch (e) {
            console.log(e);
          }
        },

        resetPass: async () => {
          try {
            await auth().sendPasswordResetEmail(email);
            return {};
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
