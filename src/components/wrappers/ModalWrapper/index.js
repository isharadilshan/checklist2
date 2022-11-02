import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {IconButton, useTheme} from 'react-native-paper';
import {relativeWidth, relativeHeight} from '../../../helper/ViewHelper';
import GradientBackground from '../../wrappers/GradientBackground';

const ModalWrapper = ({modalVisible, closeModal, children}) => {
  const {colors} = useTheme();

  return (
    <Modal
      isVisible={modalVisible}
      onSwipeComplete={closeModal}
      swipeDirection={['down']}
      swipeThreshold={50}
      onBackdropPress={closeModal}
      propagateSwipe={true}
      style={styles.modal}
      avoidKeyboard={true}>
      <GradientBackground style={styles.content}>
        <IconButton
          icon={'close'}
          color={colors.grey}
          size={25}
          style={styles.closebtn}
          onPress={closeModal}
        />
        {children}
      </GradientBackground>
    </Modal>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func,
  modalVisible: PropTypes.bool,
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    borderTopLeftRadius: relativeWidth(10),
    borderTopRightRadius: relativeWidth(10),
    padding: relativeWidth(10),
    height: relativeHeight(400),
  },
  closebtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
});

export default ModalWrapper;
