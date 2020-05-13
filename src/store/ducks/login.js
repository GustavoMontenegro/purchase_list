import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
  loginRequest: ['payload'],
  loginSuccess: ['data'],
  loginFail: ['errors'],
});

const INITIAL_STATE = {
  isLoading: false,
  data: {},
  errors: [],
  success: false,
};

const loginRequest = () => ({...INITIAL_STATE, isLoading: true});

const loginSuccess = (state, {data}) => {
  return {
    ...state,
    data,
    isLoading: false,
    errors: [],
    success: true,
  };
};

const loginFail = (state, {errors}) => {
  return {
    ...state,
    errors,
    isLoading: false,
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAIL]: loginFail,
});
