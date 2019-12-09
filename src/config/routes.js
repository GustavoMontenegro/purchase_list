import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import LoginScreen from '../screens/login/LoginScreen';

// import COLORS from './colors';

const { width } = Dimensions.get('window');

const DrawerMainRoute = createDrawerNavigator(
  // {
  //   Login: { screen: LoginScreen },
  // },
  // {
  //   initialRouteName: 'Login',
  //   drawerType: 'slide',
  //   drawerWidth: width * 0.95,
  //   drawerBackgroundColor: COLORS.menuBackground
  // }
);

const routes = {
  Login: { screen: LoginScreen }
};

export default routes;
