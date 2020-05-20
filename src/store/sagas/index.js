import {all} from 'redux-saga/effects';
import loginSaga from './login';
import purchaseListSaga from './purchaseList';
import productListSaga from './productList';

function* sagas() {
  yield all([loginSaga(), purchaseListSaga(), productListSaga()]);
}

export default sagas;
