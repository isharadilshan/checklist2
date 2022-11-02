import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as AppProvider} from './context/AppContext';
import GlobalExceptionHandler from './components/organism/GlobalExceptionHandler';
import Routes from './routes';
import {Theme} from './theme';

const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AppProvider>
      <GlobalExceptionHandler />
      <PaperProvider theme={Theme}>
        <Routes />
      </PaperProvider>
    </AppProvider>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
})(App);
