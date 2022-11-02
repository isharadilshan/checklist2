import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import BottomTabNavigator from './BottomTabNavigator';
import {UnAuthStackNavigator} from './StackNavigator';

const Routes = () => {
  const isAuthenticated = useSelector(({user}) => user?.isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <BottomTabNavigator /> : <UnAuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Routes;
