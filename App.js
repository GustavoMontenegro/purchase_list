import React from 'react';
import { Platform, KeyboardAvoidingView, AppState } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import styled from 'styled-components';
import moment from 'moment';

import { createStackNavigator, createAppContainer, NavigationActions } from 'react-navigation';

import StackIntroRoute from './src/config/routes';
import COLORS from './src/config/colors';

import { setStatusBar } from './src/utils/help';
import store from './src/config/store';
import STORAGE from './src/utils/storage';

export default class App extends React.Component {
  state = {
    appState: AppState.currentState
  };
  
  navgatorRef;
  
  async componentDidMount() {
    setStatusBar(COLORS.primary, 'light-content');
    STORAGE.setStoreItem('@App/userLoggedIn', '');
    SplashScreen.hide();

    AppState.addEventListener('change', this._handleAppStateChange.bind(this));
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
  }

  _handleAppStateChange(nextAppState) {
    if (nextAppState === 'active') {
      STORAGE.getMultipleStoreItems([STORAGE.keys.INACTIVE_SESSION, STORAGE.keys.USER_LOGGED_IN], (key, stores) => {
        let resultObj = {};

        stores.forEach((result, i) => {
          resultObj[stores[i][0]] = stores[i][1];
        });

        const inactiveSession = moment().diff(resultObj[STORAGE.keys.INACTIVE_SESSION], 'minutes');

        if (inactiveSession >= 5) {
          STORAGE.resetStoreItem(STORAGE.keys.USER_LOGGED_IN, () => {
            this.navigatorRef.dispatch(NavigationActions.navigate({ routeName: 'Login' }));
          });
        }

        STORAGE.resetStoreItem(STORAGE.keys.INACTIVE_SESSION);
      });
    } else {
      STORAGE.setStoreItem(STORAGE.keys.INACTIVE_SESSION, moment().format());
    }

    if (this.state.appState.match(/background/) && nextAppState === 'active') {
      this.setState({
        appState: nextAppState
      });
    }
  }

  render() {
    const MainNavigation = createAppContainer(
      createStackNavigator(StackIntroRoute, {
        initialRouteName: 'Login',
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
        headerMode: 'none',
        defaultNavigationOptions: {
          gesturesEnabled: false
        }
      })
    );

    return (
      <Provider store={store}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled={Platform.OS === 'ios' ? true : false}>
          <ViewStyled>
            <MainNavigation ref={r => (this.navigatorRef = r)} />
          </ViewStyled>
        </KeyboardAvoidingView>
      </Provider>
    );
  }

}

const ViewStyled = styled.View`
flex: 1;
justify-content: center;
`;