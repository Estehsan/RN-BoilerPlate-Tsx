import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TransparentBtn = ({fcolor, fontName, placeHolder, ...props}) => {
  return (
    <TouchableOpacity {...props} style={styles.main}>
      <Icon
        style={{paddingHorizontal: 10}}
        name={fontName}
        size={25}
        color={fcolor}
      />
      <Text style={styles.textData}>{placeHolder}</Text>
    </TouchableOpacity>
  );
};

export default TransparentBtn;

const styles = StyleSheet.create({
  main: {
    height: 70,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 24,
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textData: {
    fontWeight: '600',
    fontSize: 15,
    color: theme.colors.primary,
  },
});
