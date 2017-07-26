import {
    FETCH_PRODUCT_INIT,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE
} from '../actions/types';

import initialState from './initialState';

export default function activeProductReducer (state = initialState.activeProduct, action){
    switch( action.type){
        case FETCH_PRODUCT_INIT:
            return {
                 ...state,
                loading: true,
                error: null
            };

        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload,
                loading: false,
                error: null
            };

        case FETCH_PRODUCT_FAILURE:
            return {
                 ...state,
                loading: false,
                product: null,
                error: action.payload
            };

        default:
            return state;
    }
};