import React, {FC, useEffect, useState} from 'react';
import {Bg, H3} from '../../component/basics';
import {logoutUser} from '../../config/authApi';
import {authen} from '../../config/firebase';
import styled from 'styled-components';
import Btn from '../../component/basics/Btn';

// import {FlatList} from 'react-native';

const Home: FC = () => {
  return (
    <Bg>
      <Center>
        <H3>ID : {authen.currentUser?.uid}</H3>

        <H3>Email : {authen.currentUser?.email}</H3>
        <H3>displayName : {authen.currentUser?.displayName}</H3>
        <Btn onPress={logoutUser} placeHolder="Logout" />
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
