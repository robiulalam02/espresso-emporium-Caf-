import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, quantity, supplier, price, category, details, image } = useLoaderData();
    // console.log(coffee);
    const navigate = useNavigate();

    console.log(name);

    const handleEditCoffee = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const updatedForm = Object.fromEntries(form.entries())

        console.log(updatedForm);

        // PUT updated form data to DB

        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedForm)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Coffee Details Edited Seccessfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <button onClick={() => navigate('/')} className='flex items-center gap-2 text-2xl text-primary text-shadow-black text-shadow-xs rancho'><FiArrowLeft />Back to Home</button>

            <div className='mt-10 bg-[#F4F3F0] p-14 text-center'>
                <h1 className='text-primary text-4xl mb-5 rancho'>Edit Coffee Details</h1>
                <p className='mx-40 raleway'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <form className='mt-8' onSubmit={handleEditCoffee}>

                    <div className='grid grid-cols-2 gap-5'>
                        <div className='flex flex-col items-start gap-2'>
                            <label className='raleway font-semibold' htmlFor="">Name</label>
                            <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='name' defaultValue={name} placeholder='Enter coffee name' />
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <label className='raleway font-semibold' htmlFor="">Quantity</label>
                            <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='quantity' defaultValue={quantity} placeholder='Enter coffee quantity' />
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <label className='raleway font-semibold' htmlFor="">Supplier</label>
                            <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='supplier' defaultValue={supplier} placeholder='Enter coffee supplier' />
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <label className='raleway font-semibold' htmlFor="">Price</label>
                            <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='price' defaultValue={price} placeholder='Enter coffee price' />
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <label className='raleway font-semibold' htmlFor="">Category</label>
                            <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='category' defaultValue={category} placeholder='Enter coffee category' />
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <label className='raleway font-semibold' htmlFor="">Details</label>
                            <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='details' defaultValue={details} placeholder='Enter coffee details' />
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-2 mt-5'>
                        <label className='raleway font-semibold' htmlFor="">Image URL</label>
                        <input className='bg-white h-12 p-4 w-full raleway placeholder:text-sm' type="text" name='image' defaultValue={image} placeholder='Coffee image URL' />
                    </div>

                    <button className='bg-secondary rancho w-full mt-8 py-3 text-primary text-xl' type="submit">Edit Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;