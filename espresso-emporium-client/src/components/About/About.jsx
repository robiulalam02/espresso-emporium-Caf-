import React from 'react';

const About = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-10'>
            <div className='flex items-center justify-between gap-10'>
                <div className='flex flex-col gap-2'>
                    <div>
                        <img src="/src/assets/icons/1.png" alt="" />
                    </div>
                    <h3 className='text-primary text-2xl'>Awesome Aroma</h3>
                    <p className='text-base-300 text-lg'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div>
                        <img src="/src/assets/icons/2.png" alt="" />
                    </div>
                    <h3 className='text-primary text-2xl'>High Quality</h3>
                    <p className='text-base-300 text-lg'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div>
                        <img src="/src/assets/icons/3.png" alt="" />
                    </div>
                    <h3 className='text-primary text-2xl'>Pure Grades</h3>
                    <p className='text-base-300 text-lg'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div>
                        <img src="/src/assets/icons/4.png" alt="" />
                    </div>
                    <h3 className='text-primary text-2xl'>Proper Roasting</h3>
                    <p className='text-base-300 text-lg'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default About;