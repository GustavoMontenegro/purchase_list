import {all} from 'redux-saga/effects';
import loginSaga from './login';

function* sagas() {
  yield all([loginSaga()]);
}

export default sagas;
