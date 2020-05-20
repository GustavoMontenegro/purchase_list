import {takeLatest, put} from 'redux-saga/effects';
import {Types} from '../ducks/purchaseList';
// import {api} from 'utils';

function* purchaseList({payload: {user, pass}}) {
  try {
    const response = [];
    // const response = api.post(constants.api.identification.create, {
    //   params: {
    //     nickname: payload.nickname,
    //     phone: payload.phoneNumber,
    //   },
    // });
    yield put({
      type: Types.PURCHASE_LIST_SUCCESS,
      success: true,
      data: response,
    });
  } catch (error) {
    yield put({type: Types.PURCHASE_LIST_FAIL, errors: [error]});
  }
}

export default function* watcherSaga() {
  yield takeLatest(Types.PURCHASE_LIST_REQUEST, purchaseList);
}
