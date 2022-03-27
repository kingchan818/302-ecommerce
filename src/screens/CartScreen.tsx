import React from 'react';

function CartScreen() {
    return (
        <div className="relative container mx-auto max-w-7xl mt-20 ">
            <div className="titles flex font-semibold border-b-2 pb-3">
                <h1 className="pl-[200px] flex-1">Products</h1>
                <h1 className="pr-20">Price</h1>
                <h1 className="pr-20">Quantity</h1>
                <h1 className="">Total</h1>
            </div>
            {/* render the products */}
            <div className="flex font-light my-8">
                <div className="flex-1 cursor-pointer">X</div>
                <h1 className="flex-1 font-normal">Plain White Shirt</h1>
                <h1 className="pr-20">20</h1>
                <input
                    min={0}
                    max={10}
                    type="number"
                    className="mr-20 bg-gray-100 hover:bg-gray-200 outline-none font-light"
                    value={5}
                />
                <h1 className="">240</h1>
            </div>
            <div className="border-b-2" />
            {/* checkout */}
            <div className="flex flex-col max-w-md mt-[83px] mb-[50px]">
                <h1 className="text-3xl font-normal mb-[32px]">Cart Totals</h1>
                <div className="flex flex-row border-b-2">
                    <h1 className="font-light flex-1">Subtotal</h1>
                    <h1 className="font-light">$240</h1>
                </div>
                <div className="flex flex-row border-b-2 mt-[17px] ">
                    <h1 className="font-light flex-1">Shipping Fee</h1>
                    <h1 className="font-light">$200</h1>
                </div>
                <div className="flex flex-row mt-[17px] mb-[14px]">
                    <h1 className="font-semibold flex-1">Total</h1>
                    <h1 className="font-light">$440</h1>
                </div>

                <button className="py-2 px-4 bg-[#024E82] text-white">PROCESS TO CHECKOUT</button>
            </div>
        </div>
    );
}

export default CartScreen;
