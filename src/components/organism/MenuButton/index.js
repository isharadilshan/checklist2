import React from 'react';
import PropTypes from 'prop-types';
import {IconButton, useTheme} from 'react-native-paper';

const MenuButton = ({onPress, ...rest}) => {
  const {colors} = useTheme();

  return (
    <IconButton {...rest} onPress={onPress} icon={'menu'} color={colors.grey} />
  );
};

MenuButton.propTypes = {
  onPress: PropTypes.any,
};

export default MenuButton;
