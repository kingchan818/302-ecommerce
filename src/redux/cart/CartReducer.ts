import { ADD_TO_CART_ITEM, DELETE_CART_ITEM } from '../constants';
import { AppActions } from '../types/actions'
const initalState = {
    cartItems : [] as object[]
};

export const cartReducer = (state = initalState, action: AppActions) => {
    switch (action.type) {
        case ADD_TO_CART_ITEM:
            const item = action.payload;
            //TODO change the name to id
            const existItem = state.cartItems.find((x : any) => x.id === item.id);
            if (existItem) {
                return {
                    cartItems: [...state.cartItems.map((x : any) => (x.id === item.id ? { ...x, qty: x.qty + 1 } : x))],
                    status: 'info',
                    message: 'item added',
                };
            } else {
                return {
                    cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
                    status: 'info',
                    message: 'item added',
                };
            }
        case DELETE_CART_ITEM:
            const __item = action.payload;
            //TODO change the id to id
            const _existItem = state.cartItems.find((x:any) => x.id === __item.id) as any;
            if (_existItem?.qty > 1) {
                return {
                    cartItems: [...state.cartItems.map((x : any) => (x.id === __item.id ? { ...x, qty: x.qty - 1 } : x))],
                    status: 'info',
                    message: 'item deleted',
                };
            } else {
                return {
                    cartItems: [
                        ...state.cartItems.filter((value : any, index) => {
                            return !(value.id === __item.id);
                        }),
                    ],
                    status: 'info',
                    message: 'item deleted',
                };
            }

        default:
            return state;
    }
};
