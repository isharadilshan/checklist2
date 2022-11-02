import React from 'react';
import {View, Button, Text} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

const SettingScreen = () => {
  return (
    <View>
      <Text>This is Setting Screen</Text>
      <Button onPress={() => crashlytics().crash()} title={'test crash'} />
    </View>
  );
};

export default SettingScreen;
