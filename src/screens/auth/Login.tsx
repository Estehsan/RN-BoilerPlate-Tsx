import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components';

import {Bg, H1, H3} from '../../component/basics';
import Btn from '../../component/basics/Btn';
import Tinput from '../../component/basics/Tinput';

const Login = ({navigation}) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  return (
    <Bg>
      <Center>
        <H1>Hello!</H1>
        <H1 />
        <H3>Enter Your Details Below!</H3>
        <H1 />

        <Tinput
          placeholder="Email"
          label="Email"
          iconName="email"
          error="Error hai ye "
          errorText="Eror deta hai"
          onChangeText={e => {
            setEmail({value: e, error: ''});
          }}
          value={email}
        />
        <Tinput
          placeholder="Password"
          label="Password"
          iconName="lock"
          error="Error hai ye "
          errorText="Eror deta hai"
          onChangeText={e => {
            setPassword({value: e, error: ''});
          }}
          value={email}
        />
        <Btn
          placeHolder="Sign In "
          // onPress={() => navigation.navigate('Login')}
        />
      </Center>
    </Bg>
  );
};

export default Login;

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
