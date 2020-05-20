import {takeLatest, put} from 'redux-saga/effects';
import {Types} from '../ducks/productList';
// import {api} from 'utils';

function* productList({payload: {user, pass}}) {
  try {
    const response = [];
    // const response = api.post(constants.api.identification.create, {
    //   params: {
    //     nickname: payload.nickname,
    //     phone: payload.phoneNumber,
    //   },
    // });
    yield put({
      type: Types.PRODUCT_LIST_SUCCESS,
      success: true,
      data: response,
    });
  } catch (error) {
    yield put({type: Types.PRODUCT_LIST_FAIL, errors: [error]});
  }
}

export default function* watcherSaga() {
  yield takeLatest(Types.PRODUCT_LIST_REQUEST, productList);
}
