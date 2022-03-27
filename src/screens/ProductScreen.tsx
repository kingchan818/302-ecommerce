import React from 'react';

const ProductScreen = () => {
    return (
        <div className="flex fle-row justify-center">
            <div className="flex flex-col">
                <img src="https://picsum.photos/200/300" alt="" style={{ height: '720px', width: '500px' }} />
            </div>
            <div className="flex flex-col mx-9">
                <h1 className="text-4xl font-semibold">Plain White Shirt</h1>
                <h2 className="text-base font-light text-blue-900">$20.00</h2>
                <p className="w-[300px] font-light my-5">
                    A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain
                    white shirt is made up of pure cotton and has a premium finish.
                </p>
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
                <button className="my-[24px] py-2 px-4 bg-[#024E82] text-white w-[230px]">ADD TO CART</button>
            </div>
        </div>
    );
};

export default ProductScreen;
