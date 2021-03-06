import React, {useContext, useState} from 'react';
import {ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components';
import {Bg, CustomModal, H1, H2, H3} from '../../component/basics';
import Btn from '../../component/basics/Btn';
import Tinput from '../../component/basics/Tinput';
import {authen} from '../../config/firebase';
import {AuthContext} from '../../store';
import {theme} from '../../theme';
import {emailVali} from '../../validator/emailVali';
import {passVali} from '../../validator/passVali';

const Login = ({navigation}) => {
  const {login, setUsers, users} = useContext(AuthContext);

  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const onLoginPressed = async () => {
    const emailError = emailVali(email.value);
    const passwordError = passVali(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    setLoading(true);
    const em = email.value;
    const ps = password.value;

    const response = await login(em, ps);
    setUsers(response);

    if (response.error) {
      setError(response.error);
    }
    setLoading(false);
  };

  return (
    <Bg>
      <Center behavior="padding">
        <H1>Hello!</H1>
        <H1 />
        <H3>Enter Your Details Below!</H3>
        {/* <H1>{users.email}</H1> */}

        <Tinput
          iconName="email"
          placeholder="Email"
          label="Email"
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
          iconName="lock"
          placeholder="Password"
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <ForgotPass onPress={() => navigation.navigate('Reset')}>
          <H3>
            Forgot Password? <GreenText> Reset Now</GreenText>
          </H3>
        </ForgotPass>
        {loading ? (
          <ActivityIndicator size="large" color={theme.colors.primary} />
        ) : (
          <Btn placeHolder="Sign In " onPress={onLoginPressed} />
        )}

        <CustomModal message={error} onDismiss={() => setError('')} />

        <CreateAccount onPress={() => navigation.navigate('Register')}>
          <H3>
            New User? <GreenText> Create your Account now</GreenText>
          </H3>
        </CreateAccount>
      </Center>
    </Bg>
  );
};

export default Login;

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
const ForgotPass = styled.TouchableOpacity`
  color: #4ca6a8;
`;
