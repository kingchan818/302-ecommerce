import {
    ORDER_SUCCESS,
    ORDER_SUCCESS_WITH_GUSET_USER,
    ORDER_FAIL,
    ORDER_FETCH_SUCCESS,
    ORDER_FETCH_FAIL,
} from '../constants';
import axios from 'axios';
import { Dispatch } from 'redux';
import { AppActions } from '../types/actions';
import { AppState } from '../index';
import {cartStorageInterface} from '../types/cart'
export const createOrder = (bodyFormData :FormData) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    try {
        const token = JSON.parse(localStorage.getItem('userdata') as string).userToken as string;
        try {
            const { data } = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:5000/api/order/create-order',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: bodyFormData,
            });
            console.log(data);
            return dispatch({
                type: ORDER_SUCCESS,
            });
        } catch (e : any) {
            return dispatch({
                type: ORDER_FAIL,
                payload: e.message,
            });
        }
    } catch (e) {
        try {
            const { data } = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:5000/api/order/create-order',
                data: bodyFormData,
            });
            console.log(data);
            return dispatch({
                type: ORDER_SUCCESS_WITH_GUSET_USER,
                payload: data,
            });
        } catch (e : any) {
            return dispatch({
                type: ORDER_FAIL,
                payload: e.message,
            });
        }
    }
};

export const fetchOrder = (orderId :string) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    try {
        const { data } = await axios({
            method: 'GET',
            url: `http://127.0.0.1:5000/api/user/logistic/order/${orderId}`,
        });
        dispatch({
            type: ORDER_FETCH_SUCCESS,
            payload: data,
        });
    } catch (e : any) {
        dispatch({
            type: ORDER_FETCH_FAIL,
            payload: e.message,
        });
    }
};
