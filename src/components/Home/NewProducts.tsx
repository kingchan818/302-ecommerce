import React from 'react';
import Card from '../Card';

const NewProducts = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col item-center text-center justify-center py-5">
                <h1 className="font-normal text-4xl pb-[20px]"> Discover New Arrivals </h1>
                <a className="font-light text-base text-blueGray-500"> Discover New Arrivals </a>
            </div>
            <div className="flex flex-row flex-wrap justify-center mt-[30px]">
                <div className="grid grid-cols-4 grid-rows-2 gap-10 gap-x-[10rem] gap-y-[5rem]">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default NewProducts;
