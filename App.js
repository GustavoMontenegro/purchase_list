import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import store from './src/store';
import Navigator from './src/config/routes';
import COLORS from './src/config/colors';

const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView backgroundColor={COLORS.primary} />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.Os == 'ios' ? 'padding' : 'height'}>
        <Navigator />
      </KeyboardAvoidingView>
    </Provider>
  );
};

export default App;
