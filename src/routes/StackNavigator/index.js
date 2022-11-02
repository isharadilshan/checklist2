import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import {LOGIN} from '../route-paths';

const Stack = createStackNavigator();

const UnAuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export {UnAuthStackNavigator};
