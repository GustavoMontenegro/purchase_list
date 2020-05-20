import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
  productListRequest: ['payload'],
  productListSuccess: ['data'],
  productListFail: ['errors'],
});

const INITIAL_STATE = {
  isLoading: false,
  data: {},
  errors: [],
  success: false,
};

const productListRequest = () => ({...INITIAL_STATE, isLoading: true});

const productListSuccess = (state, {data}) => {
  return {
    ...state,
    data,
    isLoading: false,
    errors,
    success: true,
  };
};

const productListFail = (state, {errors}) => {
  return {
    ...state,
    errors,
    isLoading: false,
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.PRODUCT_LIST_REQUEST]: productListRequest,
  [Types.PRODUCT_LIST_SUCCESS]: productListSuccess,
  [Types.PRODUCT_LIST_FAIL]: productListFail,
});
