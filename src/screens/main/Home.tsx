import React, {FC, useState} from 'react';
import {Text} from 'react-native';
import {Bg, H1, H2} from '../../component/basics';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home: FC = () => {
  return (
    <Bg>
      <Icon name="facebook" size={20} color="red" />

      <Text>Hailoasd</Text>
      <H1>Hialo</H1>

      <H2>Hialo</H2>
    </Bg>
  );
};

export default Home;

// const Main = styled.View`
//   flex: 1;
// `;
