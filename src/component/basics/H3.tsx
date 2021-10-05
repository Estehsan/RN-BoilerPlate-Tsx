import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

const H3: FC = props => {
  return <Text style={styles.Title} {...props} />;
};

export default H3;

const styles = StyleSheet.create({
  Title: {
    fontSize: 17,
    fontWeight: '300',

    flexWrap: 'wrap',
  },
});
