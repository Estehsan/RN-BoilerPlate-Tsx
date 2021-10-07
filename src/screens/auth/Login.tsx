import React, {useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components';
import {Bg, CustomModal, H1, H2, H3} from '../../component/basics';
import Btn from '../../component/basics/Btn';
import Tinput from '../../component/basics/Tinput';
import {loginUser} from '../../config/authApi';
import {emailVali} from '../../validator/emailVali';
import {passVali} from '../../validator/passVali';

const Login = ({navigation}) => {
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
    const response = await loginUser({
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
        <H1>Hello!</H1>
        <H1 />
        <H3>Enter Your Details Below!</H3>
        <H1 />

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
        {loading === null ? (
          <H1>Sabar</H1>
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
      {/* {!error ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <H1>{error}</H1>

          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <H2>Hide Modal</H2>
          </Pressable>
        </Modal>
      ) : null} */}

      {/* {error ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={loading}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!loading);
          }}>
          <H1>{error}</H1>

          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <H2>Hide Modal</H2>
          </Pressable>
        </Modal>
      ) : null} */}
    </Bg>
  );
};

export default Login;

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
