import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../theme';

const Btn = ({placeHolder, ...props}) => {
  return (
    <TouchableOpacity {...props} style={styles.main}>
      <Text style={styles.textData}>{placeHolder}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  main: {
    height: 70,
    backgroundColor: '#4CA6A8',
    paddingHorizontal: 10,
    width: '80%',
    marginVertical: 10,

    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textData: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
});
