import { FETCH_USER_FAIL, FETCH_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS } from '../constants';
const initalState = {
    currentUser: {},
};

export const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                currentUser: action.payload,
                status: 'success',
                message: 'User Logined'
            };
        case FETCH_USER_FAIL:
            return {
                error: action.payload,
                status: 'danger',
                message: 'invalid credentials'
            };
        case REGISTER_USER_SUCCESS:
            return {
                creationStatus: action.payload,
                status: 'success',
                message: 'You have created an account'
            };
        case REGISTER_USER_FAIL:
            return {
                error: action.payload,
                status: 'danger',
                message: 'Email or Phone Number is already existed in database'
            };

        default:
            return state;
    }
};
