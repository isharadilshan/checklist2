import React, {useEffect} from 'react';
import {Alert, View} from 'react-native';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import i18n from '../../../i18n';

const GlobalExceptionHandler = () => {
  const jsErrorHandler = (e, isFatal) => {
    if (isFatal) {
      Alert.alert(
        i18n.t('globalException.0'),
        `
          ${i18n.t('globalException.1')} ${e.name} ${e.message}\n
          ${i18n.t('globalException.2')}
          `,
        [
          {
            text: i18n.t('globalException.3'),
          },
        ],
      );
    }
  };

  const nativeErrorHandler = error => {
    Alert.alert(
      i18n.t('globalException.0'),
      `
        ${i18n.t('globalException.1')} ${e.name} ${e.message}\n
        ${i18n.t('globalException.2')}
        `,
      [
        {
          text: i18n.t('globalException.3'),
        },
      ],
    );
  };

  useEffect(() => {
    setJSExceptionHandler(jsErrorHandler, true);
    if (!__DEV__) {
      setNativeExceptionHandler(nativeErrorHandler);
    }
  }, []);

  return <View />;
};

export default GlobalExceptionHandler;
