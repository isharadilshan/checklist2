import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {Linking, StyleSheet, View} from 'react-native';
import {Paragraph, Dialog, Portal} from 'react-native-paper';
import Button from '../../atoms/Button';

const NoNetworkFound = () => {
  const [noNetworkState, setNoNetworkState] = useState(false);
  const [userDismissed, setUserDismissed] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setNoNetworkState(false);
      } else {
        setNoNetworkState(true);
      }
    });
    return unsubscribe();
  }, []);

  const reCheck = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        setNoNetworkState(false);
      } else {
        setNoNetworkState(true);
      }
    });
  };

  const openSettings = () => {
    Linking.openURL('app-settings:');
  };

  return (
    <Portal>
      <Dialog
        visible={noNetworkState && !userDismissed}
        dismissable={true}
        onDismiss={() => setUserDismissed(true)}>
        <Dialog.Title>{'Network Error'}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>
            {'Please check your internet connection and try again!'}
          </Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <View style={styles.actionButtonWrapper}>
            <Button
              label={'Retry'}
              onPress={reCheck}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonLabel}
            />
            <Button
              label={'Settings'}
              onPress={openSettings}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonLabel}
            />
          </View>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  actionButtonWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContent: {
    height: 32,
  },
  buttonLabel: {
    fontSize: 14,
    lineHeight: 16,
  },
});

export default NoNetworkFound;
