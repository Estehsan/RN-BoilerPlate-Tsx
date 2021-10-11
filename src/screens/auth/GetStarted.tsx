import React, {useEffect, useState} from 'react';
import {Bg, H1, H3, H4, TransparentBtn} from '../../component/basics';
import styled from 'styled-components';
import Btn from '../../component/basics/Btn';
import {fbLogin, signInWithGoogle} from '../../config/authApi';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Settings} from 'react-native-fbsdk-next';
import {APP_KEY, WEB_CLIENT_ID} from '../../config/keys';
import auth from '@react-native-firebase/auth';

const GetStarted = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
    // iosClientId: IOS_GOOGLE_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
  Settings.setAppID(APP_KEY);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    navigation.reset({
      routes: [{name: 'Home'}],
    });
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <Bg>
      <Center>
        <H1>Welcome! </H1>
        <H4>Lets Get Started! </H4>
        <TransparentBtn
          fontName="facebook"
          fcolor="#3b5998"
          placeHolder="Sign In with Facebook"
          onPress={fbLogin}
        />
        <TransparentBtn
          fontName="google"
          placeHolder="Sign In with Google"
          fcolor="#ffbb00"
          onPress={signInWithGoogle}
        />
        <Btn
          placeHolder="Sign In with Email"
          onPress={() => navigation.navigate('Login')}
        />
        {/* <H3>{user.email}</H3> */}

        <CreateAccount onPress={() => navigation.navigate('Register')}>
          <H3>
            New User? <GreenText> Create Account</GreenText>
          </H3>
        </CreateAccount>
      </Center>
    </Bg>
  );
};

export default GetStarted;

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const CreateAccount = styled.TouchableOpacity`
  align-items: center;
`;
const GreenText = styled.Text`
  color: #4ca6a8;
  font-weight: 500;
`;
