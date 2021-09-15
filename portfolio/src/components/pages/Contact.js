import React from 'react';
import '../../styles/Contact.css';

const {PUBLIC_URL} = process.env;

const Contact = () => {
    return (
        <section className="contact">
            <h2>Find Me Online</h2>
            <ul>
                <li><a href="mailto:shelleymcq.dev@gmail.com">shelleymcq.dev@gmail.com</a></li>                 
                <li><a href="https://github.com/shelleymcq" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://www.linkedin.com/in/shelleymchardy/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
            <h2> Skills </h2>
            <div className="skills">
                <img src={PUBLIC_URL + "images/icons/icons8-html-5-48.png"} alt="HTML5 icon" />
                <img src={PUBLIC_URL + "images/icons/icons8-css3-48.png"} alt="CSS icon" />
                <img src={PUBLIC_URL + "images/icons/icons8-javascript-48.png"} alt="JavaScript icon" />
                <img src={PUBLIC_URL + "images/icons/icons8-nodejs-48.png"} alt="node.js icon" />
                <img src={PUBLIC_URL + "images/icons/icons8-npm-48.png"} alt="npm icon" />
                <img src={PUBLIC_URL + "images/icons/express-icon-48.png"} alt="express icon" />
                <img src={PUBLIC_URL + "images/icons/icons8-mysql-logo-48.png"} alt="MySQL icon" />
                <img src={PUBLIC_URL + "images/icons/icons8-mongodb-48.png"} alt="Mongodb icon" />
                <img src={PUBLIC_URL + "images/icons/icons8-react-40.png"} alt="react icon" />
            </div>
        </section>
    )
}

export default Contact