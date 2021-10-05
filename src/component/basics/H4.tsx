import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

// interface Props {
//   props: string | null;
// }

const H4: FC = props => {
  return <Text style={styles.Title} {...props} />;
};

export default H4;

const styles = StyleSheet.create({
  Title: {
    fontSize: 16,
    fontWeight: '200',
    flexWrap: 'wrap',
    marginVertical: 4,
  },
});
