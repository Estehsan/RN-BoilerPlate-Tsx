import React, {useState} from 'react';
import styled from 'styled-components';

import {signUpUser} from '../../config/authApi';

import {Bg, H1, H3, P} from '../../component/basics';
import Btn from '../../component/basics/Btn';
import Tinput from '../../component/basics/Tinput';
import {emailVali} from '../../validator/emailVali';
import {passVali} from '../../validator/passVali';
import {nameVali} from '../../validator/nameVali';

const Register = ({navigation}) => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const onSignUpPressed = async () => {
    const nameError = nameVali(name.value);
    const emailError = emailVali(email.value);
    const passwordError = passVali(password.value);
    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    setLoading(true);
    const response = await signUpUser({
      name: name.value,
      email: email.value,
      password: password.value,
    });

    if (response.error) {
      setError(response.error);
    }
    setLoading(false);
  };

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
          returnKeyType="next"
          iconName="account-plus"
          value={name.value}
          onChangeText={text => setName({value: text, error: ''})}
          error={!!name.error}
          errorText={name.error}
        />
        <Tinput
          iconName="email"
          placeholder="Enter your Email"
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <Tinput
          placeholder="Enter your Password"
          label="Password"
          iconName="lock"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <Btn placeHolder="Sign In " onPress={onSignUpPressed} />
        <P>{error}</P>
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
