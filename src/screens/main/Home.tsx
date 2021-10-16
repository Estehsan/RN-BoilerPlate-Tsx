import React, {FC, useContext, useEffect, useState} from 'react';
import {Bg, H3} from '../../component/basics';
import {authen} from '../../config/firebase';
import styled from 'styled-components';
import Btn from '../../component/basics/Btn';
import {AuthContext} from '../../store';
import {Image} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// import {FlatList} from 'react-native';

const Home: FC = () => {
  const {users, setUsers, logout} = useContext(AuthContext);

  return (
    <Bg>
      <Center>
        {/* <Image
          style={{height: 300, width: 200, borderRadius: 100}}
          source={{
            uri: users.url,
            // 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80',
          }}
        /> */}

        <H3> Name :{users?.email}</H3>
        <H3> Name :{authen.currentUser?.email}</H3>

        <H3> Email :{users?.email}</H3>
        {/* <H3>FB Name :{users?.photoURL}</H3> */}

        <H3></H3>

        {/* <H3>Google Email : {users.email}</H3>
        <H3>Google Name : {users.name}</H3> */}
        <H3></H3>
        {/* 
        <H3>Login Name : {authen.currentUser?.displayName}</H3>
        <H3> Login email : {authen.currentUser?.email}</H3> */}
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
