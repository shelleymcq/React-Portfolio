import React from 'react';
import '../../styles/About.css';

const {PUBLIC_URL} = process.env;

const About = () => {
    return (
        <section className="about">
            <img src={PUBLIC_URL + '/images/mchardy-head-sm.png'} alt="headshot of woman with mountains in background" />
            <h2>Hi! I'm Shelley McHardy</h2>
            <div>
                <p>Originally from the San Francisco Bay Area, I moved to Atlanta for a job teaching chemistry. I enjoyed it enough that I thought I might be able to handle the summer heat for at least a couple years. Then I discovered Dragon Con, the amazing Georgia State Parks, and a group of nerdy friends. That was 2010. Summer is still too hot, but it's an OK trade off. And since I'm completing the Georgia Tech Full Stack Coding Bootcamp virtually, I can avoid the worst of the heat.</p>
                <p>I have always taken a nontraditional path, slogging through night classes while working as a database manager during the day, transferring to UC Berkeley to earn my physical science and teaching degrees, and now reinventing myself as a full stack web developer. As a teacher, I pursued every learning opportunity to grow my skills and embrace new technologies. This passion evolved into a wish to be a creator of content. As a student in a full stack coding bootcamp, I am quickly gaining new technology skills to build websites, and love learning by digging into the documentation and testing code to understand the function and syntax of every single line. Each piece is a puzzle that I relish trying to solve.</p>
            </div>
            <div className="skills">
                <img src={PUBLIC_URL + "/images/icons/icons8-html-5-48.png"} alt="HTML5 icon" />
                <img src={PUBLIC_URL + "/images/icons/icons8-css3-48.png"} alt="CSS icon" />
                <img src={PUBLIC_URL + "/images/icons/icons8-javascript-48.png"} alt="JavaScript icon" />
                <img src={PUBLIC_URL + "/images/icons/icons8-nodejs-48.png"} alt="node.js icon" />
                <img src={PUBLIC_URL + "/images/icons/icons8-npm-48.png"} alt="npm icon" />
                <img src={PUBLIC_URL + "/images/icons/express-icon-48.png"} alt="express icon" />
                <img src={PUBLIC_URL + "/images/icons/icons8-mysql-logo-48.png"} alt="MySQL icon" />
                <img src={PUBLIC_URL + "/images/icons/icons8-mongodb-48.png"} alt="Mongodb icon" />
                <img src={PUBLIC_URL + "/images/icons/icons8-react-40.png"} alt="react icon" />
            </div>
        </section>
    )
}

export default About