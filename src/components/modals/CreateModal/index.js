import React from 'react';
import PropTypes from 'prop-types';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';
import ModalWrapper from '../../wrappers/ModalWrapper';

const CreateModal = ({isModalVisible, closeModal, onCreate}) => {
  const {handleSubmit, control, errors, reset, formState} = useForm();

  const createToDo = (data) => {
    onCreate(data);
    reset();
  };

  return isModalVisible ? (
    <ModalWrapper modalVisible={isModalVisible} closeModal={closeModal}>
      <View style={styles.wrapper}>
        <Controller
          name={'title'}
          defaultValue={''}
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <TextField
              label={'Title'}
              labelStyles={styles.label}
              required
              onChangeText={onChange}
              value={value}
              error={errors?.title}
            />
          )}
        />
        <Controller
          name={'description'}
          defaultValue={''}
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <TextField
              label={'Description'}
              labelStyles={styles.label}
              required
              onChangeText={onChange}
              value={value}
              multiline={true}
              noOfLines={5}
              style={{height: 200}}
              error={errors?.description}
            />
          )}
        />

        <Button
          label={'Create'}
          mode="contained"
          style={styles.buttonStyle}
          onPress={handleSubmit(createToDo)}
        />
      </View>
    </ModalWrapper>
  ) : null;
};

CreateModal.propTypes = {
  onCreate: PropTypes.func,
  closeModal: PropTypes.func,
  isModalVisible: PropTypes.bool,
};

const styles = StyleSheet.create({
  wrapper: {padding: 16},
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  label: {
    color: 'white',
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

export default CreateModal;
