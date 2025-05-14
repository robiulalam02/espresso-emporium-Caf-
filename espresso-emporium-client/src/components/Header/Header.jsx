import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='bg-[url(/src/assets/more/15.jpg)] bg-center bg-cover py-2'>
                <div className='flex items-center justify-center text-white gap-2'>
                    <img className='w-12' src="/src/assets/more/logo1.png" alt="espresso-emporium-logo" />
                    <h3 className='text-4xl'>Espresso Emporium</h3>
                </div>
            </nav> 
        </div>
    );
};

export default Header;