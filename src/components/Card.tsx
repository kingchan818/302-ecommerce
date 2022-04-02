import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Card: FC<{ id: number; price: number; name: string; image: string; detial: string }> = (props) => {
    const navigate = useNavigate();
    const navigationHandler = () => {
        navigate(`/products/${props.id}`, { state: { ...props } });
    };
    return (
        <div
            onClick={navigationHandler}
            className="h-[412px] w-[240px] flex flex-col items-center justify-center cursor-pointer"
        >
            <img src={props.image} className="w-[240px] h-[342px] object-cover" alt="model" />
            <div className="w-[240px] h-[88px] text-center">
                <h3 className="my-[10px] text-base font-semibold">{props.name}</h3>
                <p className="text-sm font-light text-gray-500">${props.price}</p>
            </div>
        </div>
    );
};

export default Card;
