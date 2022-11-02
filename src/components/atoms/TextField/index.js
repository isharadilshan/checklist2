import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {Platform, TextInput} from 'react-native';
import {TextInput as TextInputPaper, Title} from 'react-native-paper';

const TextField = forwardRef(
  (
    {label, required, labelStyles, innerTextInputStyle, keyboardType, ...rest},
    ref,
  ) => {
    return (
      <>
        {label && (
          <Title
            style={{
              fontSize: 16,
              lineHeight: 18,
              marginTop: 16,
              ...labelStyles,
            }}>
            {`${label} ${required ? '*' : ''}`}
          </Title>
        )}
        <TextInputPaper
          render={({style, ...restProps}) => (
            <TextInput
              {...restProps}
              style={[
                style,
                innerTextInputStyle,
                {paddingTop: 14, paddingBottom: 14},
              ]}
            />
          )}
          {...rest}
          mode={'outlined'}
          style={[rest?.style ? rest.style : {height: 50}]}
          ref={ref}
          placeholderTextColor={'black'}
          autoCompleteType={'off'}
          autoCorrect={false}
          keyboardType={
            keyboardType
              ? keyboardType
              : Platform.OS !== 'ios'
              ? 'visible-password'
              : null
          }
        />
      </>
    );
  },
);

TextField.propTypes = {
  keyboardType: PropTypes.string,
  label: PropTypes.string,
  innerTextInputStyle: PropTypes.object,
  labelStyles: PropTypes.object,
  required: PropTypes.bool,
};

export default TextField;
