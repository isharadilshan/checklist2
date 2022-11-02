import React from 'react';
import PropTypes from 'prop-types';
import {Button as PaperButton, useTheme} from 'react-native-paper';

const Button = ({label, style, labelStyle, contentStyle, mode, ...rest}) => {
  const {colors} = useTheme();

  return (
    <PaperButton
      mode={mode || 'contained'}
      uppercase={false}
      style={{
        elevation: 0,
        borderWidth: mode === 'outlined' ? 1 : 0,
        borderColor: 'grey',
        backgroundColor: colors.mattGreen,
        ...style,
      }}
      contentStyle={{height: 48, ...contentStyle}}
      labelStyle={{
        fontSize: 20,
        lineHeight: 22,
        color: mode === 'contained' || !mode ? 'white' : 'purple',
        ...labelStyle,
      }}
      {...rest}>
      {label}
    </PaperButton>
  );
};

Button.propTypes = {
  mode: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  contentStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};

export default Button;
