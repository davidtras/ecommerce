import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import productList from './productListReducer'; 
import activeProduct from './activeProductReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    productList : productList,
    activeProduct: activeProduct,
    cart: cart
});

export default rootReducer;