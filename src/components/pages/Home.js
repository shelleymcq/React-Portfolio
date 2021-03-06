import React from 'react';
import '../../styles/Home.css';

const {PUBLIC_URL} = process.env;

const Home = () => {
    return (
        <section className="home">
            <h1>Shelley McHardy</h1>
            <h2>full stack web developer & science educator</h2>
            <img src={PUBLIC_URL + "/images/molecule.png"} alt="graphic of molecule" />
        </section>
    )
}

export default Home;