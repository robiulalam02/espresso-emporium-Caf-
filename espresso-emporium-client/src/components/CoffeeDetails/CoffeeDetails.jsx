import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useLoaderData, useNavigate } from 'react-router';

const CoffeeDetails = () => {
    const navigate = useNavigate();
    const coffee = useLoaderData();
    console.log(coffee);
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <button onClick={() => navigate('/')} className='flex items-center gap-2 text-2xl text-primary text-shadow-black text-shadow-xs rancho'><FiArrowLeft />Back to Home</button>

            <div className='mt-10 bg-[#F4F3F0] p-14 text-center flex items-center justify-center'>
                <div className='w-6/12 flex justify-center'>
                    <img className='w-64' src={coffee.image} alt="" />
                </div>
                <div className='flex flex-col items-start gap-5 w-6/12'>
                    <h1 className='text-4xl text-primary text-shadow-secondary text-shadow-sm rancho'>Niceties</h1>

                    <div className='text-start flex flex-col gap-2'>

                        <p className='raleway'><strong className='raleway'>Name:</strong> {coffee.name}</p>
                        <p className='raleway'><strong className='raleway'>Supplier:</strong> {coffee.supplier}</p>
                        <p className='raleway'><strong className='raleway'>Price:</strong> {coffee.price}</p>
                        <p className='raleway'><strong className='raleway'>Category:</strong> {coffee.category}</p>
                        <p className='raleway'><strong className='raleway'>Details:</strong> {coffee.details}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;