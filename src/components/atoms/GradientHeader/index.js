import React from 'react';
import {Header} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Colors from '../../../theme/colors';
import GradientBackground from '../../wrappers/GradientBackground';

const GradientHeader = props => {
  return (
    <GradientBackground
      style={{height: StatusBar.currentHeight}}
      color={Colors.darkGradient}>
      <Header {...props} />
    </GradientBackground>
  );
};

export default GradientHeader;
