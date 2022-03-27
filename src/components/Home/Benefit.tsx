import React from 'react';
import ship from '../../assets/svgs/ship.svg';
import save from '../../assets/svgs/save.svg';
import reverse from '../../assets/svgs/reverse.svg';
import secure from '../../assets/svgs/secure.svg';
const Benefit = () => {
    return (
        <div className="container mx-auto my-20">
            <div className="flex w-[100%] flex-row items-center justify-center mt-10">
                <div className="flex flex-row pr-10">
                    <img src={ship} alt="shipment" />
                    <div className="flex flex-col ml-10">
                        <h1 className="text-xl font-bold">Free Shipping</h1>
                        <p className="text-sm font-light text-gray-500">Enjoy free shipping on all orders above $100</p>
                    </div>
                </div>
                <div className="flex flex-row pr-10">
                    <img src={save} alt="shipment" />
                    <div className="flex flex-col ml-10">
                        <h1 className="text-xl font-bold">SUPPORT 24/7</h1>
                        <p className="text-sm font-light text-gray-500">
                            Our support team is there to help you for queries
                        </p>
                    </div>
                </div>
                <div className="flex flex-row pr-10">
                    <img src={reverse} alt="shipment" />
                    <div className="flex flex-col ml-10">
                        <h1 className="text-xl font-bold">30 DAYS RETUREN</h1>
                        <p className="text-sm font-light text-gray-500">
                            Simply return it within 30 days for an exchange.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <img src={secure} alt="shipment" />
                    <div className="flex flex-col ml-10">
                        <h1 className="text-xl font-bold">100% PAYMENT SECURE</h1>
                        <p className="text-sm font-light text-gray-500">
                            Our payments are secured with 256 bit encryption
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;
