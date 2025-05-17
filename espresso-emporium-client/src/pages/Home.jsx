import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Products from '../components/Products/Products';
import { useLoaderData } from 'react-router';
import Collections from '../components/Collections/Collections';

const Home = () => {
    const coffeeData = useLoaderData();
    const [coffees, setCoffees] = useState(coffeeData)
    console.log(coffeeData);
    return (
        <div>
            <Hero />
            <About />
            <Products coffees={coffees} setCoffees={setCoffees} />
            <Collections />
        </div>
    );
};

export default Home;