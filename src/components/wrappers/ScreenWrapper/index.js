import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import StatusBar from '../../atoms/StatusBar';

const ScreenWrapper = ({children, color}) => {
  const {colors} = useTheme();

  return (
    <>
      <StatusBar translucent={true} />
      <View
        style={{
          flex: 1,
          backgroundColor: color || colors.blueGrey,
        }}>
        {children}
      </View>
    </>
  );
};

ScreenWrapper.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  noPaddings: PropTypes.bool,
};

export default ScreenWrapper;
