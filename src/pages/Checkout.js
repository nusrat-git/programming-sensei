import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkout = useLoaderData();
    return (
        <div>
            <h1 className='text-3xl font-bold md:mt-0 mt-16'>{checkout.class_name}</h1>
        </div>
    );
};

export default Checkout;