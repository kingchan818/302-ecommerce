import { ADD_TO_CART_ITEM, DELETE_CART_ITEM } from '../constants';
export const addToCartAction = (name, id, price, image) => (dispatch, getState) => {
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

export const deleteCartItem = (name, id, price) => (dispatch, getState) => {
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
