import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import GlobalExceptionHandler from './components/organism/GlobalExceptionHandler';
import NoNetworkFound from './components/organism/NoNetworkFound';
import redux from './redux/store';
import Routes from './routes';
import {Theme} from './theme';

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={redux.store}>
      <PaperProvider theme={Theme}>
        <GlobalExceptionHandler />
        <NoNetworkFound />
        <Routes />
      </PaperProvider>
    </Provider>
  );
};

export default App;
