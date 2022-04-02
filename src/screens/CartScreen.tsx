import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem } from '../redux/cart/CartAction';
import { AppState } from '../redux';
function CartScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems } = useSelector((state: AppState) => state.cartReducer);
    console.log(cartItems);
    //name : string, id : number, price :number
    const deleteHandler = (item: any) => {
        dispatch(deleteCartItem(item.name, item.id, item.price));
    };
    let count = 0;
    const totalPrice = cartItems.forEach((item: any) => {
        count += item.price * item.qty;
    });
    let total = count;

    return (
        <div className="relative container mx-auto max-w-7xl mt-20 ">
            <div className="titles flex font-semibold border-b-2 pb-3">
                <h1 className="pl-[200px] flex-1">Products</h1>
                <h1 className="pr-20">Price</h1>
                <h1 className="pr-20">Quantity</h1>
                <h1 className="">Total</h1>
            </div>
            {/* render the products */}
            {cartItems.map((item) => (
                <>
                    <div className="flex font-light my-8">
                        <div className="flex-1 cursor-pointer" onClick={() => deleteHandler(item)}>
                            X
                        </div>
                        <h1 className="flex-1 font-normal mr-[624px]">{item.name}</h1>
                        <h1 className="pr-20">{item.price}</h1>
                        <input
                            min={0}
                            max={10}
                            type="number"
                            className="mr-20 bg-gray-100 hover:bg-gray-200 outline-none font-light"
                            value={item.qty}
                        />
                        <h1 className="">{item.price * item.qty}</h1>
                    </div>
                    <div className="border-b-2" />
                </>
            ))}
            {/* checkout */}
            <div className="flex flex-col max-w-md mt-[83px] mb-[50px]">
                <h1 className="text-3xl font-normal mb-[32px]">Cart Totals</h1>
                <div className="flex flex-row border-b-2">
                    <h1 className="font-light flex-1">Subtotal</h1>
                    <h1 className="font-light">${count}</h1>
                </div>
                <div className="flex flex-row border-b-2 mt-[17px] ">
                    <h1 className="font-light flex-1">Shipping Fee</h1>
                    <h1 className="font-light">$200</h1>
                </div>
                <div className="flex flex-row mt-[17px] mb-[14px]">
                    <h1 className="font-semibold flex-1">Total</h1>
                    <h1 className="font-light">${total + 200}</h1>
                </div>

                <button
                    className="py-2 px-4 bg-[#024E82] text-white"
                    onClick={() => navigate('/checkout', { state: { cartItems } })}
                >
                    PROCESS TO CHECKOUT
                </button>
            </div>
        </div>
    );
}

export default CartScreen;
