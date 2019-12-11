import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import LoginScreen from '../screens/login/LoginScreen';

// import COLORS from './colors';

const { width } = Dimensions.get('window');

const DrawerMainRoute = createDrawerNavigator(
  {
    Login: { screen: LoginScreen },
  },
  {
    initialRouteName: 'Login',
    drawerType: 'slide',
    drawerWidth: width * 0.95,
  }
);

const routes = {
  MainRoute: { screen: DrawerMainRoute },
  Login: { screen: LoginScreen }
};

export default routes;
