import React, {FC, useState} from 'react';
import {Bg, H1, H2, Ce, H3} from '../../component/basics';
import Icon from 'react-native-vector-icons/FontAwesome';
import {logoutUser} from '../../config/authApi';
import {auth, db} from '../../config/firebase';
import styled from 'styled-components';
import Btn from '../../component/basics/Btn';
import {FlatList} from 'react-native';
const Home: FC = () => {
  return (
    <Bg>
      <Center>
        <Icon name="facebook" size={20} color="red" />
        <H3>{auth.currentUser?.displayName}</H3>
        <H3>{auth.currentUser?.uid}</H3>

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
  margin-right: ;
`;
