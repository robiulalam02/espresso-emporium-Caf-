import React from 'react';

const Hero = () => {
    return (
        <div className='bg-[url(/src/assets/more/3.png)] bg-center bg-cover h-[660px] flex items-center'>
            <div className='w-6/12'></div>
            <div className='text-white flex flex-col gap-5'>
                <h1 className='text-5xl'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-xl'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <div>
                    <button className='bg-secondary py-1 font-medium px-6 text-primary text-lg'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;