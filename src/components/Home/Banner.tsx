import React from 'react';
import banner from '../../assets/img/banner.jpeg';
const Banner = () => {
    return (
        <div className="w-full relative">
            <img src={banner} alt="banner-img" style={{ height: 600, width: '100%', objectFit: 'cover' }} />

            <div className="shopNow flex flex-col items-center justify-center w-[20%] flex-warp text-center absolute bottom-[130px] right-[200px]">
                <h1 className="text-5xl font-bol text-white" style={{ textShadow: '2px 5px rgba(0,0,0,0.2)' }}>
                    STYLIST PICK BEAT THE HEAT
                </h1>
                <div className="shop border-[5px] border-white m-5 w-[175.8px] h-[58px] flex items-center justify-center cursor-pointer">
                    <a className="text-2xl text-white">Shop Now </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
