import React, {FC, useContext, useEffect, useState} from 'react';
import {Bg, H3} from '../../component/basics';
import {authen, db} from '../../config/firebase';
import styled from 'styled-components';
import Btn from '../../component/basics/Btn';
import {AuthContext} from '../../store';
import {Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import {AccessToken} from 'react-native-fbsdk-next';

// import {FlatList} from 'react-native';

const Home: FC = () => {
  const {users, setUsers, logout} = useContext(AuthContext);
  // console.log('This IS home===> ', auth().currentUser?);

  return (
    <Bg>
      <Center>
        <Image
          style={{height: 200, width: 200, borderRadius: 100}}
          source={{
            uri:
              'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80' &&
              auth().currentUser?.photoURL,
            // uri: auth().currentUser?.photoURL,
          }}
        />

        <H3></H3>
        <H3>Name :{auth().currentUser?.displayName}</H3>
        <H3>Email :{auth().currentUser?.email}</H3>

        <H3></H3>

        <Btn onPress={logout} placeHolder="Logout" />
      </Center>
    </Bg>
  );
};

export default Home;

const Main = styled.View`
  flex: 1;
`;
const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LogoutBtn = styled.Pressable`
  justify-content: center;
  align-items: center;
  background-color: #34a5dd;
  border-radius: 10;
`;
