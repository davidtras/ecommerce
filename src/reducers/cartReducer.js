import {
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    LOAD_CART_ITEMS
} from '../actions/types';

import initialState from './initialState';

export default function cartReducer (state = initialState.cart, action){
    switch( action.type){
        case LOAD_CART_ITEMS:
            return {
                 ...state,
                 items:[...state.items]
                
            };

        case REMOVE_CART_ITEM:{
            //Obtengo el elemento
            const searchItem = (elem) => elem._id === action.payload._id;
            const item = state.items.find(searchItem);
            //obtengo el indice de elemento
            const index = state.items.findIndex(searchItem);
             return {
                ...state,
                items:[
                    ...state.items.slice(0, index),//copio hasta el elemento a borrar
                    ...state.items.slice(index+1)//copio desde el siguiente que hemos borrado hasta el final

                ],
                total: state.total - item.price
                
            };
        };
           
        case ADD_CART_ITEM:
            return {
                 ...state,
                 items:[...state.items, action.payload],
                 total: state.total + action.payload.price     
            };

        default:
            return state;
    }
};