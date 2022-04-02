import React from 'react';
import Success from './Success';
import Warning from './Warning';
import Danger from './Danger';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux';
export const DecidedNode = () => {
    const cart = useSelector((state: AppState) => state.cartReducer);
    const { status } = useSelector((state: AppState) => state.orderReducer);

    if (cart.status || status === 'success') {
        if (cart.status === 'success') {
            return <Success payload={cart.message} />;
        } else if (status === 'success') {
            return <Success payload="order has been processed" />;
        }
    }
};
