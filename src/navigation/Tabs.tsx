// import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import AuthNavi from './AuthNavi';
// import AppNavi from './AppNavi';

// const Stack = createNativeStackNavigator();

// const Tabs = () => {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }
//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);
//   if (initializing) return null;

//   return (
//     <NavigationContainer>
//       {user ? <AppNavi /> : <AuthNavi />}
//     </NavigationContainer>
//   );
// };

// export default Tabs;
