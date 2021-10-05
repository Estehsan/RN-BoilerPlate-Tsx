import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props {
  // handleTextAreaUpdate: string | null;
}

const H1: FC<Props> = props => {
  return <Text style={styles.Title} {...props} />;
};

export default H1;

const styles = StyleSheet.create({
  Title: {
    fontSize: 40,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginVertical: 4,
  },
});
