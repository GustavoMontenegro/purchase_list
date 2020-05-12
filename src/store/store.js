import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Reactotron from 'reactotron-react-native';
// import reducers from '../reducers/reducers';
import './reactotron';

const middlewares = [thunk];

if (__DEV__) {
  middlewares.push(logger);
}

const store = __DEV__
  ? createStore(
      // reducers,
      compose(
        applyMiddleware(...middlewares),
        Reactotron.createEnhancer()
      )
    )
  : createStore(/*reducers,*/ compose(applyMiddleware(...middlewares)));

export default store;
