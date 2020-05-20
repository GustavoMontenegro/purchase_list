import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
  purchaseListRequest: ['payload'],
  purchaseListSuccess: ['data'],
  purchaseListFail: ['errors'],
});

const INITIAL_STATE = {
  isLoading: false,
  data: {},
  errors: [],
  success: false,
};

const purchaseListRequest = () => ({...INITIAL_STATE, isLoading: true});

const purchaseListSuccess = (state, {data}) => {
  return {
    ...state,
    data,
    isLoading: false,
    errors,
    success: true,
  };
};

const purchaseListFail = (state, {errors}) => {
  return {
    ...state,
    errors,
    isLoading: false,
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.PURCHASE_LIST_REQUEST]: purchaseListRequest,
  [Types.PURCHASE_LIST_SUCCESS]: purchaseListSuccess,
  [Types.PURCHASE_LIST_FAIL]: purchaseListFail,
});
