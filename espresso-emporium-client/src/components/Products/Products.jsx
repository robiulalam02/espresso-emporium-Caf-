import React from 'react';
import { BsCupHot } from 'react-icons/bs';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { useNavigate } from 'react-router';

const Products = ({ coffees, setCoffees }) => {
    const navigate = useNavigate();
    const setRemainingCoffees = (data) => {
        console.log(data);
        setCoffees(data);
    }
    return (
        <div className='my-20 relative'>
            <div className='flex flex-col gap-4 max-w-screen-xl mx-auto text-center'>
                <p className='rancho'>--- Sip & Savor ---</p>
                <h2 className='text-4xl text-shadow-primary text-shadow-sm rancho'>Our Popular Products</h2>
                <div className='flex justify-center'>
                    <button onClick={() => navigate('/add-coffee')} className='flex rancho items-center gap-1 text-white text-shadow-md text-shadow-black bg-secondary py-1 px-3 rounded-md border border-black hover:bg-transparent transition ease-in-out hover:text-primary hover:text-shadow-none hover:font-bold'>Add Coffee <span><BsCupHot color='black' /></span></button>
                </div>
            </div>
            <img className='absolute top-0 left-0 -z-10' src="/src/assets/more/4.png" alt="" />
            <img className='absolute right-0 -z-10' src="/src/assets/more/5.png" alt="" />

            <div className='max-w-screen-xl mx-auto grid grid-cols-2 mt-10 gap-5'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setRemainingCoffees={setRemainingCoffees} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Products;