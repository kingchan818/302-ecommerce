import React from 'react';

const CheckOutScreen = () => {
    return (
        <form>
            <div className="billing-detial ml-20">
                <h1 className="my-5 text-4xl font-semibold">Billing details</h1>
                <div className="mb-4">
                    <label className="block font-light text-sm mb-2">Full Name</label>
                    <input
                        className="border w-1/3 py-2 px-3 text-grey-darker outline-none"
                        id="name"
                        type="text"
                        placeholder="Full Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-light mb-2">Street address *</label>
                    <input
                        className="border w-1/3 py-2 px-3 text-grey-darker outline-none"
                        id="address"
                        type="text"
                        placeholder="House number and street name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-light mb-2">Town / City*</label>
                    <input
                        className="border w-1/3 py-2 px-3 text-grey-darker outline-none"
                        id="town"
                        type="text"
                        placeholder="Your Town / City"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-light mb-2">Phone*</label>
                    <input
                        className="border w-1/3 py-2 px-3 text-grey-darker outline-none"
                        id="phone"
                        type="text"
                        placeholder="Phone"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-light mb-2">Email address*</label>
                    <input
                        className="border w-1/3 py-2 px-3 text-grey-darker outline-none"
                        id="email"
                        type="text"
                        placeholder="Email address"
                    />
                </div>
            </div>
            <div className="relative order flex flex-col my-[6rem]">
                <div className="container xl:max-w-[1330px] mx-auto border-t-[1px] border-b-[1px] flex flex-row justify-center">
                    <h1 className="text-base font-semibold py-5 flex-1">Product</h1>
                    <h1 className="text-base font-semibold py-5 mr-[300px]">Total</h1>
                </div>
                {/* purchase detial */}
                <div className="container xl:max-w-[1330px] mx-auto  border-b-[1px] flex flex-row justify-center">
                    <h1 className="text-sm font-light py-5 flex-1">Plain White Shirt</h1>
                    <h1 className="text-base font-light py-5 mr-[300px]">$59</h1>
                </div>
                {/* subTotal */}
                <div className="container xl:max-w-[1330px] mx-auto  border-b-[1px] flex flex-row justify-center">
                    <h1 className="text-sm font-light py-5 flex-1">SubTotal</h1>
                    <h1 className="text-base font-light py-5 mr-[300px]">$59</h1>
                </div>
                <div className="container xl:max-w-[1330px] mx-auto border-b-[1px] flex flex-row justify-center">
                    <h1 className="flex-1"></h1>
                    <h1 className="text-base font-semibold py-5 mr-[300px]">$59</h1>
                </div>
                <button className="absolute bottom-[-70px] right-[100px] bg-[#024E82] text-white py-3 px-4">
                    Place Order
                </button>
            </div>
        </form>
    );
};

export default CheckOutScreen;
