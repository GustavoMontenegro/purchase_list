import {combineReducers} from 'redux';

import login from './login';
import purchaseList from './purchaseList';
import productList from './productList';

const appReducer = () => combineReducers({login, purchaseList, productList});

export default appReducer;
