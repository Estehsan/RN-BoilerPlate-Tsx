import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStarted, Loading, Login, Register, Reset} from '../screens/auth';

const Stack = createNativeStackNavigator();

const AuthNavi = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {/* <Stack.Screen name="Loading" component={Loading} /> */}

    <Stack.Screen name="GetStarted" component={GetStarted} />

    <Stack.Screen name="Reset" component={Reset} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);
export default AuthNavi;
