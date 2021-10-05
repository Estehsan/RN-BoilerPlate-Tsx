import React, {useState} from 'react';
import styled from 'styled-components';

import {Bg, H1, H3} from '../../component/basics';
import Btn from '../../component/basics/Btn';
import Tinput from '../../component/basics/Tinput';

const Register = ({navigation}) => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  return (
    <Bg>
      <Center>
        <H1>Register Now!</H1>
        <H1 />
        <H3>Enter Your Details Below!</H3>
        <H1 />

        <Tinput
          placeholder="Enter your Name"
          label="name"
          iconName="account-plus"
          error="Error hai ye "
          errorText="Eror deta hai"
          onChangeText={e => {
            setName({value: e, error: ''});
          }}
          value={name}
        />
        <Tinput
          placeholder="Enter your Email"
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
          placeholder="Enter your Password"
          label="Password"
          iconName="lock"
          error="Error hai ye "
          errorText="Eror deta hai"
          onChangeText={e => {
            setPassword({value: e, error: ''});
          }}
          value={password}
        />
        <Btn
          placeHolder="Sign In "
          // onPress={() => navigation.navigate('Register')}
        />
        <CreateAccount onPress={() => navigation.navigate('Login')}>
          <H3>
            Already Registered? <GreenText> Login Now</GreenText>
          </H3>
        </CreateAccount>
      </Center>
    </Bg>
  );
};

export default Register;

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
