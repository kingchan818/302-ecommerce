import { combineReducers,applyMiddleware, createStore } from 'redux';
import { cartReducer } from './cart/CartReducer';
import { userReducer } from './user/userReducer';
import orderReducer from './order/orderReducer';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppActions } from './types/actions';
export const reducer = combineReducers({
    cartReducer: cartReducer,
    userReducer: userReducer,
    orderReducer: orderReducer,
});

export type AppState = ReturnType<typeof reducer>;

export const store = createStore(reducer, applyMiddleware(thunk as ThunkMiddleware<AppState,AppActions>));