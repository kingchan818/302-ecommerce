import React, { FC } from 'react';
import { RegisterModalProps } from '../../types/components/RegisterModal';
const RegisterModals: FC<RegisterModalProps> = ({ setToggleRegister, toggleRegister, setIsOpen, isOpen }) => {
    const closeHandler = (): void => {
        console.log('closeHandler');
        setToggleRegister(!toggleRegister);
    };
    const backToLoginHandler = (): void => {
        console.log('backToLoginHandler');
        setToggleRegister(!toggleRegister);
        setIsOpen(!isOpen);
    };
    return (
        <div className={`${toggleRegister === false && 'hidden'} relative mx-auto w-1/3 h-screen`}>
            <div className="shadow-lg bg-white rounded-lg p-8">
                <div className="flex justify-end mb-6">
                    <button onClick={closeHandler}>
                        <span className="mr-2">Close</span>
                    </button>
                </div>

                <h1 className="text-center text-2xl text-green-dark">Register</h1>

                <form className="pt-6 pb-2 my-2">
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">First Name</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            id="first_name"
                            type="text"
                            placeholder="Your First Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Last Name</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            id="last_name"
                            type="text"
                            placeholder="Your Last Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Phone Number</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            id="phone_num"
                            type="text"
                            placeholder="Your Phone number"
                        />
                    </div>
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
                                Register
                            </button>
                        </div>

                        <div className="mt-4 md:mt-0 cursor-pointer" onClick={backToLoginHandler}>
                            <a className="font-light no-underline">Back To Login</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterModals;
