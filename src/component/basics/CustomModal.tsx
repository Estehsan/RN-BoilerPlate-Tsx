import React, {FC} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {H1, H2, H3, P} from '.';

// interface Props {
//   props: string | null;
// }

const CustomModal: FC = ({type = 'error', message, onDismiss}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={!!message}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <H2>Error</H2>
          <H2></H2>

          <P>{message}</P>
          <Pressable
            style={{
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 10,
              backgroundColor: 'red',
            }}
            onPress={onDismiss}>
            <H2>Ok</H2>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
