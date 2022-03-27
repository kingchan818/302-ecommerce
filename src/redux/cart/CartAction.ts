import { ADD_TO_CART_ITEM, DELETE_CART_ITEM } from '../constants';
import { Dispatch } from 'redux';
import { AppActions } from '../types/actions';
import { AppState } from '../index';

export const addToCartAction =
    (name : string, id : number, price : number, image :string) => (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch({
            type: ADD_TO_CART_ITEM,
            payload: {
                id: id,
                name: name,
                image: image,
                price: price,
            },
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
    };

export const deleteCartItem = (name : string, id : number, price :number ) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) =>  {
    dispatch({
        type: DELETE_CART_ITEM,
        payload: {
            id: id,
            name: name,
            price: price,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
};
