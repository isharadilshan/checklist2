import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {Title, useTheme} from 'react-native-paper';
import Button from '../../atoms/Button';
import ModalWrapper from '../../wrappers/ModalWrapper';

const FloorCordinateModal = ({isModalVisible, closeModal, cordinates}) => {
  const {colors} = useTheme();

  return isModalVisible ? (
    <ModalWrapper modalVisible={isModalVisible} closeModal={closeModal}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Title style={{color: colors.grey}}>{`X CORDINATE:   ${
            Math.round(cordinates?.xCordinate * 100) / 100
          }`}</Title>
          <Title style={{color: colors.grey}}>{`Y CORDINATE:   ${
            Math.round(cordinates?.yCordinate * 100) / 100
          }`}</Title>
        </View>
        <Button
          label={'OK'}
          mode="contained"
          style={styles.buttonStyle}
          onPress={closeModal}
        />
      </View>
    </ModalWrapper>
  ) : null;
};

FloorCordinateModal.propTypes = {
  cordinates: PropTypes.shape({
    xCordinate: PropTypes.number,
    yCordinate: PropTypes.number,
  }),
  closeModal: PropTypes.func,
  isModalVisible: PropTypes.bool,
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    alignItems: 'center',
  },
  content: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: 200,
  },
});

export default FloorCordinateModal;
