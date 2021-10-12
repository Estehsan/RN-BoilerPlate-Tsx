import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/main';

const Stack = createNativeStackNavigator();

const AppNavi = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: null,
    }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);
export default AppNavi;
