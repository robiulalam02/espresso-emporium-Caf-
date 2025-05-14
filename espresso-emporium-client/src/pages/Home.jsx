import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Products from '../components/Products/Products';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Products />
        </div>
    );
};

export default Home;