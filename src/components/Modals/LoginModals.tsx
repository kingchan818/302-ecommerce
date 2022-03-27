import React, { FC } from 'react';
import { LoginModalProps } from '../../types/components/LoginModal';

const LoginModals: FC<LoginModalProps> = ({ isOpen, setIsOpen, setToggleRegister, toggleRegister }) => {
    const closeHandler = (): void => {
        console.log('closeHandler');
        setIsOpen(!isOpen);
    };
    const toggleRegisterHandler = (): void => {
        console.log(toggleRegister);
        setToggleRegister(!toggleRegister);
        setIsOpen(!isOpen);
    };
    return (
        //mx-6 md:mx-auto w-[100%] h-full md:w-1/2 lg:w-1/3 z-20 m-8
        <div className={`${isOpen === false && 'hidden'} relative mx-auto w-1/3 h-screen`}>
            <div className="shadow-lg bg-white rounded-lg p-8">
                <div className="flex justify-end mb-6">
                    <button onClick={closeHandler}>
                        <span className="mr-2">Close</span>
                    </button>
                </div>

                <h1 className="text-center text-2xl text-green-dark">Login</h1>

                <form className="pt-6 pb-2 my-2">
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Email Address</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            id="email"
                            type="text"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2">Password</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="block md:flex items-center justify-between">
                        <div>
                            <button className="text-white font-bold py-2 px-4 rounded bg-black" type="button">
                                Sign In
                            </button>
                        </div>

                        <div className="mt-4 md:mt-0 cursor-pointer" onClick={toggleRegisterHandler}>
                            <a className="font-light no-underline">New member? Register Now!</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModals;
