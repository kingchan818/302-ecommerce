import React from 'react';

const CompanyInfo = () => {
    return (
        <div className="flex flex-col mr-[210px] mt-10">
            <h4 className="font-medium text-base">COMPANY INFO</h4>
            <div className="flex flex-col mt-[20px]">
                <a className="font-light text-sm">About Us</a>
                <a className="font-light text-sm">Latest Posts</a>
                <a className="font-light text-sm">Contact Us</a>
            </div>
        </div>
    );
};
const HelpLinks = () => {
    return (
        <div className="flex flex-col mr-[210px] mt-10">
            <h4 className="font-medium text-base">HELP LINKS</h4>
            <div className="flex flex-col mt-[20px]">
                <a className="font-light text-sm">Tracking</a>
                <a className="font-light text-sm">Order Status</a>
                <a className="font-light text-sm">Delivery</a>
                <a className="font-light text-sm">Shipping Info</a>
                <a className="font-light text-sm">FAQ</a>
            </div>
        </div>
    );
};
const UseFulLink = () => {
    return (
        <div className="flex flex-col mr-[210px] mt-10">
            <h4 className="font-medium text-base">USEFUL LINKS</h4>
            <div className="flex flex-col mt-[20px]">
                <a className="font-light text-sm">Special Offers</a>
                <a className="font-light text-sm">Advetising</a>
                <a className="font-light text-sm">Terms of Use</a>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="flex flex-col  bg-gray-50 h-[420px]">
            <div className="flex flex-row justify-center flex-1">
                <CompanyInfo />
                <HelpLinks />
                <UseFulLink />
            </div>
            <div className="container mx-auto border-t-2 border-gray-200 py-4">
                <div className="flex flex-col">
                    <a className="text-sm">© 2021 NorthStar eCommerce</a>
                    <div className="flex mt-3">
                        <a className="text-xs">Privacy Policy</a>
                        <a className="text-xs">Terms of Use</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
