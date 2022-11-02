import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {IconButton, Surface, useTheme} from 'react-native-paper';

const ModalWrapper = ({modalVisible, closeModal, children, fullScreen}) => {
  const {colors} = useTheme();

  return (
    <Modal
      isVisible={modalVisible}
      onSwipeComplete={closeModal}
      swipeDirection={fullScreen ? [] : ['down']}
      swipeThreshold={fullScreen ? 300 : 50}
      onBackdropPress={closeModal}
      propagateSwipe={true}
      style={styles.modal}>
      <Surface
        style={[
          styles.content,
          {
            flex: fullScreen ? 1 : null,
            backgroundColor: colors.blueGrey,
          },
        ]}>
        <IconButton
          icon={'close'}
          color={colors.grey}
          size={25}
          style={styles.closebtn}
          onPress={closeModal}
        />
        {children}
      </Surface>
    </Modal>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func,
  modalVisible: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    margin: 10,
  },
  content: {
    elevation: 8,
    borderRadius: 10,
  },
  closebtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
});

export default ModalWrapper;
