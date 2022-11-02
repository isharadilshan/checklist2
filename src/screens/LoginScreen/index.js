import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput as Input, useTheme} from 'react-native-paper';
import Button from '../../components/atoms/Button';
import Logo from '../../components/atoms/Logo';
import TextInput from '../../components/atoms/TextInput';
import KeyboardAvoidingWrapper from '../../components/wrappers/KeyBoardAvoidingWrapper';
import {setUserAuthenticated, setUserInfo} from '../../redux/actions/user';
import store from '../../redux/store';
import {signWithEmailPassword} from '../../services/auth';
import {
  userNameValidator,
  passwordValidator,
} from '../../utils/helper/Validator';

const LoginScreen = () => {
  const [userName, setUserName] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const {colors} = useTheme();

  const onSubmit = async () => {
    const userNameError = userNameValidator(userName.value);
    const passwordError = passwordValidator(password.value);
    if (userNameError || passwordError) {
      setUserName({value: userName.value, error: userNameError});
      setPassword({value: password.value, error: passwordError});
      return;
    }
    try {
      const response = await signWithEmailPassword(
        userName.value,
        password.value,
      );
      if (response?.user) {
        store.store.dispatch(setUserAuthenticated(true));
        store.store.dispatch(setUserInfo(response?.user?._user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <Logo />
      <Text style={[styles.greetingText, {color: colors.mattGreen}]}>
        {'Welcome back'}
      </Text>
      <TextInput
        label="User Name"
        returnKeyType="next"
        value={userName.value}
        onChangeText={(text) => setUserName({value: text, error: ''})}
        error={!!userName.error}
        errorText={userName.error}
        autoCapitalize="none"
        left={<Input.Icon name="account" color={colors.mattGreen} />}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        left={<Input.Icon name="lock" color={colors.mattGreen} />}
      />
      <View style={styles.buttonWrapper}>
        <Button
          label={'Sign in'}
          mode="contained"
          style={styles.buttonStyle}
          onPress={onSubmit}
        />
      </View>
    </KeyboardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  buttonWrapper: {
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonStyle: {
    width: 250,
  },
});

export default LoginScreen;
