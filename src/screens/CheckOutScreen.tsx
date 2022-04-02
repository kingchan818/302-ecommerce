import React, { useEffect, useState, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createOrder } from '../redux/order/orderAction';
const CheckOutScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation() as any;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [checkOut, setCheckOut] = useState(false);
    const [address, setAddress] = useState('');

    const product_ids = state.cartItems.map((value: any, key: any) => {
        return { product_id: value.id, qty: value.qty };
    });
    const prices = state.cartItems.map((value: any, key: any) => {
        return { total_price: value.price * value.qty };
    });

    let count = 0;
    const totalPrice = state.cartItems.forEach((item: any) => {
        count += item.price * item.qty;
    });

    const submitHandler = (
        e: FormEvent<HTMLFormElement>,
        firstName: string,
        lastName: string,
        email: string,
        productIds: number[],
        address: string
    ) => {
        e.preventDefault();
        const bodyFormData = new FormData();
        bodyFormData.append('first_name', firstName);
        bodyFormData.append('last_name', lastName);
        bodyFormData.append('email', email);
        bodyFormData.append('address', address);
        bodyFormData.append('product_ids', JSON.stringify(productIds));
        dispatch(createOrder(bodyFormData));
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };
    useEffect(() => {
        const isUser = JSON.parse(localStorage.getItem('userdata') as string);
        if (isUser) {
            const first_name = document.getElementById('first-name');
            const last_name = document.getElementById('last-name');
            const email = document.getElementById('email');
            first_name?.setAttribute('value', isUser.FIRST_NAME);
            last_name?.setAttribute('value', isUser.LAST_NAME);
            email?.setAttribute('value', isUser.EMAIL);
        }
    }, []);

    return (
        <form onSubmit={(e) => submitHandler(e, firstName, lastName, email, product_ids, address)}>
            <div className="billing-detial ml-20">
                <h1 className="my-5 text-4xl font-semibold">Billing details</h1>
                <div className="mb-4">
                    <label className="block font-light text-sm mb-2">First Name</label>
                    <input
                        className="border w-1/3 py-2 px-3 text-grey-darker outline-none"
                        id="first-name"
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-light text-sm mb-2">Last Name</label>
                    <input
                        className="border w-1/3 py-2 px-3 text-grey-darker outline-none"
                        id="last-name"
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-light mb-2">Email address*</label>
                    <input
                        className="border w-1/3 py-2 px-3 text-grey-darker outline-none"
                        id="email"
                        type="text"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-light mb-2">Home address *</label>
                    <input
                        className="border w-1/3 py-2 px-3 text-grey-darker outline-none"
                        id="address"
                        type="text"
                        placeholder="House number and street name"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
            </div>
            <div className="relative order flex flex-col my-[6rem]">
                <div className="container xl:max-w-[1330px] mx-auto border-t-[1px] border-b-[1px] flex flex-row justify-center">
                    <h1 className="text-base font-semibold py-5 flex-1">Product</h1>
                    <h1 className="text-base font-semibold py-5 mr-[300px]">Total</h1>
                </div>
                {/* purchase detial */}
                {state?.cartItems?.map((item: any) => (
                    <div className="container xl:max-w-[1330px] mx-auto  border-b-[1px] flex flex-row justify-center">
                        <h1 className="text-sm font-light py-5 flex-1">{item.name}</h1>
                        <h1 className="text-base font-light py-5 mr-[300px]">${item.price * item.qty}</h1>
                    </div>
                ))}

                {/* subTotal */}
                <div className="container xl:max-w-[1330px] mx-auto  border-b-[1px] flex flex-row justify-center">
                    <h1 className="text-sm font-light py-5 flex-1">SubTotal</h1>
                    <h1 className="text-base font-light py-5 mr-[300px]">${count}</h1>
                </div>
                <div className="container xl:max-w-[1330px] mx-auto border-b-[1px] flex flex-row justify-center">
                    <h1 className="flex-1"></h1>
                    <h1 className="text-base font-semibold py-5 mr-[300px]">${count}</h1>
                </div>
                <button
                    className="absolute bottom-[-70px] right-[100px] bg-[#024E82] text-white py-3 px-4"
                    type="submit"
                >
                    Place Order
                </button>
            </div>
        </form>
    );
};

export default CheckOutScreen;
