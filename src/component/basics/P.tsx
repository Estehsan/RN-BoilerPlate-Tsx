import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

const P: FC = props => {
  return <Text style={styles.Title} {...props} />;
};

export default P;

const styles = StyleSheet.create({
  Title: {
    fontSize: 14,
    flexWrap: 'wrap',
  },
});
