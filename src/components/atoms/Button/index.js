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
        borderColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
      contentStyle={{height: 40, ...contentStyle}}
      labelStyle={{
        fontSize: 16,
        lineHeight: 18,
        color: mode === 'contained' || !mode ? colors.white : colors.primary,
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
