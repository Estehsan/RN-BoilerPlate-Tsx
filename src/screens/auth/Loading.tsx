import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Bg} from '../../component/basics';
import {theme} from '../../theme';
import {auth} from '../../config/firebase';

export default function Loading({navigation}) {
  auth.onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      navigation.reset({
        routes: [{name: 'Home'}],
      });
    } else {
      // User is not logged in
      navigation.reset({
        routes: [{name: 'GetStarted'}],
      });
    }
  });

  return (
    <Bg>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Bg>
  );
}
