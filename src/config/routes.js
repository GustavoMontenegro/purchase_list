import React, {useLayoutEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import {getStoreItem} from '../store';

import {LoginScreen} from '../screens/login';

const Stack = createStackNavigator();

const Navigator = () => {
  // const [initialRoute, setInitialRoute] = useState('');

  useLayoutEffect(() => {
    // getStoreItem('@BeSafe:TermAgreed', termAccepted => {
    //   setInitialRoute(termAccepted === 'true' ? 'Onboarding' : 'Profile');
    // });
  }, []);

  // if (!initialRoute) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={LoginScreen}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
