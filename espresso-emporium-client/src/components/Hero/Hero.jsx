import React, { use } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';
import { FaRegUser } from 'react-icons/fa';

const Hero = () => {
    const navigate = useNavigate();
    const { profile } = use(AuthContext)
    return (
        <div className='bg-[url(/src/assets/more/3.png)] bg-center bg-cover h-[660px] flex items-center'>
            <div className='w-6/12'></div>
            <div className='text-white flex flex-col gap-5'>
                <h1 className='text-5xl rancho'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-xl rancho'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <div>
                    {
                        profile ?
                            <button onClick={() => navigate('/auth/signup')} className='bg-secondary py-1 font-medium px-5 text-primary text-lg hover:bg-transparent hover:text-white transition ease-in-out border hover:border-white rancho flex items-center gap-1'>See Profile <FaRegUser /></button>
                            :
                            <button onClick={() => navigate('/auth/signup')} className='bg-secondary py-1 font-medium px-5 text-primary text-lg hover:bg-transparent hover:text-white transition ease-in-out border hover:border-white rancho flex items-center gap-1'>Get Started <MdArrowForwardIos /></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Hero;