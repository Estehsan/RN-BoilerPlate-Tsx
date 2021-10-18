import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavi from './AuthNavi';
import AppNavi from './AppNavi';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';

import {WEB_CLIENT_ID} from '../config/keys';
import {AuthContext, AuthProvider} from '../store/AuthProvider';
// import {useStore} from '../store/store';

const MainNavi = () => {
  const {users, setUsers} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  console.log('Data', users);

  const onAuthStateChanged = users => {
    setUsers(users);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/user.gender.read'],
    // iosClientId: IOS_GOOGLE_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)

    webClientId: WEB_CLIENT_ID,
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  });

  return (
    <AuthProvider>
      <NavigationContainer>
        {users ? <AppNavi /> : <AuthNavi />}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default MainNavi;
