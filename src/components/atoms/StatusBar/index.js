import React from 'react';
import PropTypes from 'prop-types';
import {StatusBar as Status} from 'react-native';

const StatusBar = ({barStyle, translucent, background}) => {
  return (
    <Status
      barStyle={barStyle || 'light-content'}
      translucent={translucent}
      backgroundColor={background || 'transparent'}
    />
  );
};

StatusBar.propTypes = {
  background: PropTypes.string,
  barStyle: PropTypes.string,
  translucent: PropTypes.bool,
};

export default StatusBar;
