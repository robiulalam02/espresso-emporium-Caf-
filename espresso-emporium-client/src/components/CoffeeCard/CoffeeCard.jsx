import React from 'react';
import { IoMdEye } from 'react-icons/io';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setRemainingCoffees }) => {
    const navigate = useNavigate();

    const handleDelete = (id) => {
        console.log('deleted', id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after delete deta:', data);
                    })

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                const remainingCoffees = coffees.filter(item => item._id !== id);
                setRemainingCoffees(remainingCoffees)
            }

        });
    }

    return (
        <div className='flex items-center justify-between bg-[#F5F4F1] rounded-md p-8'>
            <div>
                <img src={coffee.image} alt="" />
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-lg'><strong>Name:</strong> {coffee.name}</p>
                <p className='text-lg'><strong>Supplier:</strong> {coffee.supplier}</p>
                <p className='text-lg'><strong>Price:</strong> {coffee.price}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <button onClick={() => navigate(`/coffees/${coffee._id}`)} className='bg-secondary p-2 rounded-md'><IoMdEye size={20} color='white' /></button>
                <button onClick={() => navigate(`/edit-coffee/${coffee._id}`)} className='bg-primary p-2 rounded-md'><MdEdit size={20} color='white' /></button>
                <button onClick={() => handleDelete(coffee._id)} className='bg-rose-600 p-2 rounded-md'><MdDelete size={20} color='white' /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;