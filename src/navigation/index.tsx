import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthNavi from './AuthNavi';
import AppNavi from './AppNavi';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';
import {WEB_CLIENT_ID} from '../config/keys';
// import {useStore} from '../store/store';

const MainApp = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [uid, setUid] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    if (user) {
      setEmail(user.email);
      setName(user.name);
      setUid(user.uid);
    } else {
      setEmail('');
      setName('');
      setUid('');
    }
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/user.gender.read'],
      // iosClientId: IOS_GOOGLE_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)

      webClientId: WEB_CLIENT_ID,
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppNavi /> : <AuthNavi />}
    </NavigationContainer>
  );
};

export default MainApp;
