import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../atoms/Button';
import ModalWrapper from '../../wrappers/ModalWrapper';

const DeleteModal = ({isModalVisible, closeModal, onDelete}) => {
  const deleteToDo = (data) => {
    onDelete(data);
  };

  return isModalVisible ? (
    <ModalWrapper modalVisible={isModalVisible} closeModal={closeModal}>
      <View style={styles.wrapper}>
        <Text>Are you sure to delete this??</Text>

        <Button
          label={'Create'}
          mode="contained"
          style={styles.buttonStyle}
          onPress={deleteToDo}
        />
      </View>
    </ModalWrapper>
  ) : null;
};

DeleteModal.propTypes = {
  onEdit: PropTypes.func,
  closeModal: PropTypes.func,
  isModalVisible: PropTypes.bool,
  todo: PropTypes.object,
};

const styles = StyleSheet.create({
  wrapper: {padding: 16},
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  subHeadline2: {
    fontSize: 16,
    lineHeight: 18,
    marginHorizontal: 16,
    marginTop: 16,
  },
  buttonStyle: {
    marginHorizontal: 40,
    marginTop: 45,
  },
});

export default DeleteModal;
