/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import 'es6-symbol/implement';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
