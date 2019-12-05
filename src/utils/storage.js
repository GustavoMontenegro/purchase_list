/* eslint-disable no-console */

import AsyncStorage from '@react-native-community/async-storage';

const setStoreItem = async (key, value, onSuccessCallback = () => {}, onFailureCallback = () => {}) => {
  try {
    await AsyncStorage.setItem(key, value);
    onSuccessCallback(key, value);
  } catch (error) {
    const message = `[AsyncStorage] Error saving on [${key}], value: ${value}. [ERROR]: ${error}`;
    console.error(message);
    onFailureCallback(key, value);
  }
};

const getStoreItem = async (key, callback = () => {}) => {
  let value;
  try {
    value = await AsyncStorage.getItem(key);
    callback(key, value);
  } catch (error) {
    const message = `[AsyncStorage] Error retrieving value from [${key}]. Error: ${error}`;
    console.error(message);
  }

  return value;
};

const getMultipleStoreItems = async (keys, callback = () => {}) => {
  let value;

  try {
    value = await AsyncStorage.multiGet(keys, callback);
  } catch (error) {
    const message = `[AsyncStorage] Error retrieving values from [${keys.toString()}]. Error: ${error}`;
    console.error(message);
  }

  return value;
};

const resetStoreItem = async (key, callback = () => {}) => {
  let value;
  try {
    await AsyncStorage.removeItem(key);
    value = await AsyncStorage.getItem(key);
    callback(key, value);
  } catch (error) {
    const message = `[AsyncStorage] Error resetting value from [${key}]. Error: ${error}`;
    console.error(message);
  }

  return value;
};

const debug = async (callback = () => {}) => {
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (_, stores) => {
      console.log('[DEBUG AsyncStorage - All keys]');
      console.table(stores);
      callback();
      // stores.map((result, i, store) => {
      //   // get at each store's key/value so you can work with it
      //   let key = store[i][0];
      //   let value = store[i][1];
      // });
    });
  });
};

const keys = {
  USER_LOGGED_IN: '@App/userLoggedIn',
  INACTIVE_SESSION: '@App/inactiveSession',
  FCM_TOKEN: '@App/fcmToken',
  HAS_NOTIFICATION: '@App/notificationCount'
};

export default { debug, setStoreItem, getStoreItem, getMultipleStoreItems, resetStoreItem, keys };
