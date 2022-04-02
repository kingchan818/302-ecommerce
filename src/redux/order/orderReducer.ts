import {
    ORDER_SUCCESS,
    ORDER_SUCCESS_WITH_GUSET_USER,
    ORDER_FAIL,
    ORDER_FETCH_FAIL,
    ORDER_FETCH_SUCCESS,
} from '../constants';
import { AppActions } from '../types/actions';

const initalState = { 
    order: {
        data : {
            arrivedTimeStamp : '',
            creationTimeStamp : '',
            currentLocation : '',
            id : '',
            logisticVender : '',
            status : ''
        }
    },
    detial: {}, 
    status: '',
    error: '' 
};

const orderReducer = (state = initalState, action : AppActions) => {
    switch (action.type) {
        case ORDER_SUCCESS:
            return {
                ...state,
                detial: action.payload,
                status: 'success',
            };
        case ORDER_SUCCESS_WITH_GUSET_USER:
            return {
                ...state,
                detial: action.payload,
                status: 'success',
            };
        case ORDER_FAIL:
            return {
                ...state,
                detial: action.payload,
                status: 'error',
            };
        case ORDER_FETCH_SUCCESS:
            return {
                ...state,
                order: action.payload,
            };
        case ORDER_FETCH_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};
export default orderReducer;
