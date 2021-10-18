import React, {useContext, useState} from 'react';
import styled from 'styled-components';

import {Bg, CustomModal, H1, H3, P} from '../../component/basics';
import Btn from '../../component/basics/Btn';
import Tinput from '../../component/basics/Tinput';
import {emailVali} from '../../validator/emailVali';
import {passVali} from '../../validator/passVali';
import {nameVali} from '../../validator/nameVali';
import {ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import {theme} from '../../theme';
import {AuthContext} from '../../store/AuthProvider';

const Register = ({navigation}) => {
  const {register, setUsers} = useContext(AuthContext);

  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [loading, setLoading] = useState(false);
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
    const em = email.value;
    const ps = password.value;
    const na = name.value;

    const response = await register(em, ps, na);
    setUsers(response);

    if (response.error) {
      setError(response.error);
    }
    setLoading(false);
  };

  return (
    <Bg>
      <Center behavior="padding">
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
        {!loading ? (
          <Btn placeHolder="Sign In " onPress={onSignUpPressed} />
        ) : (
          <ActivityIndicator size="large" color={theme.colors.primary} />
        )}
        <P>{error}</P>
        <CreateAccount onPress={() => navigation.navigate('Login')}>
          <H3>
            Already Registered? <GreenText> Login Now</GreenText>
          </H3>
        </CreateAccount>
        <CustomModal message={error} onDismiss={() => setError('')} />
      </Center>
    </Bg>
  );
};

export default Register;

const Center = styled.KeyboardAvoidingView`
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
