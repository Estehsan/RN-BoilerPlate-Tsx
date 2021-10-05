import React from 'react';
import {Bg, H1, H3, H4, TransparentBtn} from '../../component/basics';
import styled from 'styled-components';
import Btn from '../../component/basics/Btn';
const GetStarted = ({navigation}) => {
  return (
    <Bg>
      <Center>
        <H1>Welcome! </H1>
        <H4>Lets Get Started! </H4>

        <TransparentBtn
          fontName="facebook"
          fcolor="#3b5998"
          placeHolder="Sign In with Facebook"
          onPress={() => navigation.navigate('Login')}
        />
        <TransparentBtn
          fontName="google"
          placeHolder="Sign In with Google"
          fcolor="#ffbb00"
          onPress={() => navigation.navigate('Login')}
        />
        <Btn
          placeHolder="Sign In with Email"
          onPress={() => navigation.navigate('Login')}
        />
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
