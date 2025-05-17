import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import { MdLogout } from 'react-icons/md';
import Swal from 'sweetalert2';

const Header = () => {
    const { profile, userSignOut } = use(AuthContext);

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "user signout successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error=>{
                console.log(error);
            })
    }

    return (
        <div>
            <nav className='bg-[url(/src/assets/more/15.jpg)] bg-center bg-cover py-2 flex justify-between items-center px-10'>
                <div className='flex items-center w-full justify-center text-white gap-2'>
                    <img className='w-12' src="/src/assets/more/logo1.png" alt="espresso-emporium-logo" />
                    <h3 className='text-4xl rancho'>Espresso Emporium</h3>
                </div>
                <div>
                    {
                        profile && <button onClick={handleSignOut} className='flex items-center text-white'><MdLogout color='white' size={24} /></button>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;