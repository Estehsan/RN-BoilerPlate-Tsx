import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

const H2: FC = props => {
  return <Text style={styles.Title} {...props} />;
};

export default H2;

const styles = StyleSheet.create({
  Title: {
    fontSize: 30,
    fontWeight: '400',
    flexWrap: 'wrap',
  },
});
