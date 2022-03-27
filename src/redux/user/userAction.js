import axios from 'axios';
import { FETCH_USER_SUCCESS, FETCH_USER_FAIL, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from '../constants';
import jwt from 'jsonwebtoken';
export const userLoginAction = (bodyFormData) => async (dispatch, getState) => {
    try {
        const { headers } = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/user/login',
            data: bodyFormData,
        });
        const userToken = headers['authorization'];
        let user = jwt.decode(userToken, { complete: true });

        user = { ...user.payload.sub, userToken: userToken };
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: user,
        });

        localStorage.setItem('userdata', JSON.stringify(user));
    } catch (e) {
        dispatch({
            type: FETCH_USER_FAIL,
            payload: e.message,
        });
    }
};

export const userRegisterAction = (bodyFormData) => async (dispatch, getState) => {
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
    } catch (e) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: e.message,
        });
    }
};
