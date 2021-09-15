import React from 'react';
import '../../styles/Home.css';

const {PUBLIC_URL} = process.env;

const Home = () => {
    return (
        <section className="home">
            <h1>web developer & science educator</h1>
            <img src={PUBLIC_URL + "images/molecule.png"} alt="graphic of molecule" />
        </section>
    )
}

export default Home;