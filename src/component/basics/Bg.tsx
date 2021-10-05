import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../theme';

const H1: FC = ({children}) => {
  return <SafeAreaView style={styles.main}>{children}</SafeAreaView>;
};

export default H1;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
});
