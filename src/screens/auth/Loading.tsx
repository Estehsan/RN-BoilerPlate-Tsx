import React from 'react';
import {ActivityIndicator} from 'react-native';
import firebase from 'firebase/app';
import {Bg} from '../../component/basics';
import {theme} from '../../theme';

export default function AuthLoadingScreen({navigation}) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      navigation.reset({
        routes: [{name: 'GetStarted'}],
      });
    } else {
      // User is not logged in
      navigation.reset({
        routes: [{name: 'Login'}],
      });
    }
  });

  return (
    <Bg>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Bg>
  );
}
