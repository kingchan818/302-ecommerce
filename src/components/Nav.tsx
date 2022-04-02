import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import user from './../assets/svgs/user.svg';
import cart from './../assets/svgs/cart.svg';
import qty from './../assets/svgs/qty.svg';
import { NavProps } from '../types/components/Nav';
import { useSelector } from 'react-redux';
import { AppState } from '../redux';
const Nav: FC<NavProps> = ({ isOpen, setIsOpen }) => {
    const { cartItems } = useSelector((state: AppState) => state.cartReducer);
    return (
        <div className="flex flex-row justify-end items-center top-0 sticky w-full p-[10px] flex-warp backdrop-blur-md z-10">
            <div className="section1 m-2 pr-28 flex flex-row flex-warp flex-1 items-center ">
                <a className="text-2xl">MudYe Shop</a>
                <div className="flex ml-10">
                    <Link to="/" className="text-base mr-10 cursor-pointer">
                        Home
                    </Link>
                    {/* <a className="text-base mr-10 cursor-pointer">About</a>
                    <a className="text-base cursor-pointer">Contact Us</a> */}
                </div>
            </div>

            <div className="section3 m-2 flex flex-row flex-warp text-base">
                <Link to="/track" className=" mr-10 cursor-pointer">
                    Delivery Status
                </Link>

                <img src={user} className="mr-10 cursor-pointer" alt="user" onClick={() => setIsOpen(!isOpen)} />
                <div className="relative">
                    <Link to="/cart">
                        <img src={cart} className=" cursor-pointer" alt="cart" />
                        {/* passing dynamic */}
                        <img src={qty} alt="" className="absolute top-[-5px] right-[-9px] " />
                        <p className="absolute top-[-7px] right-[-3px] text-white">{cartItems.length}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
