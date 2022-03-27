import React from 'react';

const Card = () => {
    return (
        <div className="h-[412px] w-[240px] flex flex-col items-center justify-center cursor-pointer">
            <img src="https://picsum.photos/1000/1000" className="w-[240px] h-[342px]" alt="model" />
            <div className="w-[240px] h-[88px] text-center">
                <h3 className="my-[10px] text-base font-semibold">Plain White Shirt</h3>
                <p className="text-sm font-light text-gray-500">$200</p>
            </div>
        </div>
    );
};

export default Card;
