import { combineReducers,applyMiddleware, createStore,Middleware } from 'redux';
import { cartReducer } from './cart/CartReducer';
import { userReducer } from './user/userReducer';
import orderReducer from './order/orderReducer';
import {mapReducer} from './map/mapReducer';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppActions } from './types/actions';
import { composeWithDevTools } from 'redux-devtools-extension';
// interface initalState {
//     cartReducer: {
//         cartItems : [],
//         status : '',
//         message : '',
//     },
//     userReducer: {
//         currentUser: {},
//     },
//     orderReducer: {
//         order: {
//             data : {
//                 arrivedTimeStamp : '',
//                 creationTimeStamp : '',
//                 currentLocation : '',
//                 id : '',
//                 logisticVender : '',
//                 status : ''
//             }
//         },
//         detial: {}, 
//         status: '',
//         error: '' 
//     },
//     mapReducer : {
//         geolocation : {
//             lat:0,
//             lng:0,
//         }
//     },
// }
export const reducer = combineReducers({
    cartReducer: cartReducer,
    userReducer: userReducer,
    orderReducer: orderReducer,
    mapReducer : mapReducer,
});

export type AppState = ReturnType<typeof reducer>;

const middlewares : Array<Middleware> = [
    thunk as ThunkMiddleware<AppState,AppActions>,
]




export const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)) );