import React, { useEffect, useState } from 'react';
import Card from '../Card';
import axios from 'axios';
interface productsInterface {
    IMG_PATH: string;
    NAME: string;
    PRICE: number;
    ID: number;
    DETIAL: string;
}

const NewProducts = () => {
    const [products, setProducts] = useState<productsInterface[]>([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/products', { params: { category_id: 14 } }).then((all) => {
            setProducts(all.data);
            console.log(all.data);
        });
    }, []);

    return (
        <div className="w-full">
            <div className="flex flex-col item-center text-center justify-center py-5">
                <h1 className="font-normal text-4xl pb-[20px]"> Discover New Arrivals </h1>
                <a className="font-light text-base text-blueGray-500"> Discover New Arrivals </a>
            </div>
            <div className="flex flex-row flex-wrap justify-center mt-[30px]">
                <div className="grid grid-cols-4 grid-rows-2 gap-10 gap-x-[10rem] gap-y-[5rem]">
                    {products.map((product, key) => (
                        <Card
                            key={key}
                            image={product.IMG_PATH}
                            name={product.NAME}
                            price={product.PRICE}
                            id={product.ID}
                            detial={product.DETIAL}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewProducts;
