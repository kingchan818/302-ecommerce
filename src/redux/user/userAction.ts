import axios from 'axios';
import { Dispatch } from 'redux';
import {AppActions} from '../types/actions';
import {AppState} from '../index'
import { FETCH_USER_SUCCESS, FETCH_USER_FAIL, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from '../constants';
import jwt from 'jwt-decode';
export const userLoginAction = (bodyFormData: FormData) => async (dispatch : Dispatch<AppActions> , getState:() => AppState )  => {
    try {
        const { headers } = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/user/login',
            data: bodyFormData,
        });
        const userToken = headers['authorization'];
        let user = jwt(userToken) as any;
        console.log(user)
        const _user = { ...(user?.sub as object ), userToken };
        console.log(_user);
            dispatch({
                type: FETCH_USER_SUCCESS,
                payload: _user,
            });

        localStorage.setItem('userdata', JSON.stringify(_user));
    } catch (e : any) {
        dispatch({
            type: FETCH_USER_FAIL,
            payload: e.message,
        });
    }
};

export const userRegisterAction = (bodyFormData: FormData) => async (dispatch : Dispatch<AppActions>, getState : ()=> AppState) => {
    try {
        const { data } = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/admin/create',
            data: bodyFormData,
        });

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data,
        });
        localStorage.setItem('userdata', JSON.parse(data));
    } catch (e : any) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: e.message,
        });
    }
};
