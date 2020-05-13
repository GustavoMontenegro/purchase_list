import {takeLatest, put} from 'redux-saga/effects';
import {Types} from '../ducks/login';
// import {api} from 'utils';

function* login({payload: {user, pass}}) {
  try {
    const response = [];
    // const response = api.post(constants.api.identification.create, {
    //   params: {
    //     nickname: payload.nickname,
    //     phone: payload.phoneNumber,
    //   },
    // });
    yield put({
      type: Types.LOGIN_SUCCESS,
      success: true,
      data: response,
    });
  } catch (error) {
    yield put({type: Types.LOGIN_FAIL, errors: [error]});
  }
}

export default function* watcherSaga() {
  yield takeLatest(Types.LOGIN_REQUEST, login);
}
