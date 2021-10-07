import React, {FC} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {P} from '.';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../theme';

// interface InputProps {
//   errorText: 'string | null';
//   description: 'string | null';
//   iconName: 'string | null';
// }

const Tinput: FC = ({errorText, description, iconName, ...props}) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={[focused ? styles.finput : styles.binput]}>
        <Icon
          style={{paddingHorizontal: 10}}
          name={iconName}
          size={25}
          color={focused ? theme.colors.black : theme.colors.ublack}
        />

        <TextInput
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {description && !errorText ? <P>{description}</P> : null}
      {errorText ? <P>{errorText}</P> : null}
    </View>
  );
};

export default Tinput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  textFocus: {
    backgroundColor: 'red',
    borderColor: '#5d05d5',
  },
  binput: {
    borderRadius: 20,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    height: 70,
    width: '90%',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  finput: {
    backgroundColor: '#fff',
    padding: 5,
    height: 70,
    width: '90%',

    borderRadius: 20,
    borderColor: theme.colors.primary,
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderWidth: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
});
