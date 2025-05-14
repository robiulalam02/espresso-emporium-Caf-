import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);
        const coffeeData = Object.fromEntries(data.entries())
        console.log(coffeeData);

        // sending form data to DB

        fetch('http://localhost:3000/coffees', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(coffeeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    })
                }
            })
    }

    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <button className='flex items-center gap-2 text-2xl text-primary text-shadow-black text-shadow-xs'><FiArrowLeft /> Back to Home</button>

            <div className='mt-10 bg-[#F4F3F0] p-14 text-center'>
                <h1 className='text-primary text-4xl mb-5'>Add New Coffee</h1>
                <p className='mx-40 raleway'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <form className='mt-8' onSubmit={handleAddCoffee}>

                    <div className='grid grid-cols-2 gap-5'>
                        <div className='flex flex-col items-start gap-2'>
                            <label className='raleway font-semibold' htmlFor="">Name</label>
                            <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='name' placeholder='Enter coffee name' />
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <label className='raleway font-semibold' htmlFor="">Quantity</label>
                            <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='quantity' placeholder='Enter coffee quantity' />
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <label className='raleway font-semibold' htmlFor="">Supplier</label>
                            <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='supplier' placeholder='Enter coffee supplier' />
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <label className='raleway font-semibold' htmlFor="">Taste</label>
                            <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='taste' placeholder='Enter coffee taste' />
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <label className='raleway font-semibold' htmlFor="">Category</label>
                            <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='category' placeholder='Enter coffee category' />
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <label className='raleway font-semibold' htmlFor="">Details</label>
                            <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='details' placeholder='Enter coffee details' />
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-2 mt-5'>
                        <label className='raleway font-semibold' htmlFor="">Details</label>
                        <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='image' placeholder='Enter coffee details' />
                    </div>

                    <button className='bg-secondary w-full mt-8 py-3 text-primary text-xl' type="submit">Add Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;