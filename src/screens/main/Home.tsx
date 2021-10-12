import React, {FC, useState} from 'react';
import {Bg, H1, H2, Ce, H3} from '../../component/basics';
import {logoutUser} from '../../config/authApi';
import {authen, db} from '../../config/firebase';
import styled from 'styled-components';
import Btn from '../../component/basics/Btn';
// import {FlatList} from 'react-native';
const Home: FC = () => {
  return (
    <Bg>
      <Center>
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
