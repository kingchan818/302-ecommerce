import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../redux/cart/CartAction';
const ProductScreen = () => {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const { id, price, name, image, detial } = state as any;
    console.log(id, price, name, image, detial);
    const addToCart = () => {
        dispatch(addToCartAction(name, id, price, image));
    };
    return (
        <div className="flex fle-row justify-center">
            <div className="flex flex-col">
                <img src={image} alt="" style={{ height: '720px', width: '500px', objectFit: 'cover' }} />
            </div>
            <div className="flex flex-col mx-9">
                <h1 className="text-4xl font-semibold">{name}</h1>
                <h2 className="text-base font-light text-blue-900">${price}</h2>
                <p className="w-[300px] font-light my-5">{detial}</p>
                <input
                    max={10}
                    min={0}
                    type="number"
                    placeholder="Quantity"
                    className="my-[24px] py-2 px-4 w-[250px] bg-gray-100 hover:bg-gray-200 outline-none"
                />
                <p className="my-[2px] font-normal">
                    Category: <div className="font-normal text-gray-400 inline">Men, Polo, Casual</div>
                </p>
                <button className="my-[24px] py-2 px-4 bg-[#024E82] text-white w-[230px]" onClick={addToCart}>
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default ProductScreen;
