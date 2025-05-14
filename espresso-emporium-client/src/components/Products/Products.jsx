import React from 'react';
import { BsCupHot } from 'react-icons/bs';

const Products = () => {
    return (
        <div className='my-20 relative h-screen'>
            <div className='flex flex-col gap-4 max-w-screen-xl mx-auto text-center'>
                <p>--- Sip & Savor ---</p>
                <h2 className='text-4xl text-shadow-primary text-shadow-sm'>Our Popular Products</h2>
                <div className='flex justify-center'>
                    <button className='flex items-center gap-1 text-white text-shadow-md text-shadow-black bg-secondary py-1 px-3 rounded-md border border-black'>Add Coffee <span><BsCupHot color='black' /></span></button>
                </div>
            </div>
            <img className='absolute top-0 left-0 -z-10' src="/src/assets/more/4.png" alt="" />
            <img className='absolute right-0 -z-10' src="/src/assets/more/5.png" alt="" />
        </div>
    );
};

export default Products;