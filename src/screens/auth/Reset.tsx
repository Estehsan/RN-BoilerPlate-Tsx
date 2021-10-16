import React, {useContext, useState} from 'react';
import {emailVali} from '../../validator/emailVali';
import styled from 'styled-components';
import {Bg, CustomModal, H1, H2, H3} from '../../component/basics';
import Tinput from '../../component/basics/Tinput';
import Btn from '../../component/basics/Btn';
import {sendEmailWithPassword} from '../../config/authApi';
import {AuthContext} from '../../store';

const Reset = () => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({value: '', error: ''});

  const {resetPass} = useContext(AuthContext);

  const sendResetPasswordEmail = async () => {
    const emailError = emailVali(email.value);
    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }
    setLoading(true);
    const response = await sendEmailWithPassword(email.value);
    if (response.error) {
      setError({type: 'error', message: response.error});
    } else {
      setError({
        type: 'success',
        message: 'Email with password has been sent.',
      });
    }
    setLoading(false);
  };

  return (
    <Bg>
      <Center>
        <H2>Forgot Password ? 😔</H2>
        <H1 />
        <H3>Enter Your Email Below! 👇</H3>
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
        <Btn placeHolder="Reset Your Email " onPress={resetPass} />
        <CustomModal
          {...error}
          onDismiss={() => setError({value: '', type: ''})}
        />
      </Center>
    </Bg>
  );
};

export default Reset;
const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
