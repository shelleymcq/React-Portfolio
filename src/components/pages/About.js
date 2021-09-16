import React from 'react';
import '../../styles/About.css';

const {PUBLIC_URL} = process.env;

const About = () => {
    return (
        <section className="about">
            <img src={PUBLIC_URL + '/images/mchardy-head-sm.png'} alt="headshot of woman with mountains in background" />
            <h2>About Me</h2>
            <div>
                <p>Originally from the San Francisco Bay Area, I moved to Atlanta for a job teaching chemistry. I enjoyed it enough that I thought I might be able to handle the summer heat for at least a couple years. Then I discovered Dragon Con, the amazing Georgia State Parks, and a group of nerdy friends. That was 2010. Summer is still too hot, but it's an OK trade off. And since I'm completing the Georgia Tech Full Stack Coding Bootcamp virtually, I can avoid the worst of the heat.</p>
                <p>I have always taken a nontraditional path, slogging through night classes while working as a database manager during the day, transferring to UC Berkeley to earn my physical science and teaching degrees, and now reinventing myself as a full stack web developer. As a teacher, I pursued every learning opportunity to grow my skills and embrace new technologies. My drive to learn influenced me to become a web creator and broaden my scope of impact. As a student in a full stack coding bootcamp, I am quickly gaining new technology skills to build websites, and love learning by digging into the documentation and testing code to understand the function and syntax of every single line. My science teaching experience has honed my ability to communicate, collaborate, and manage learners of all levels. I want a role that leverages both my tech and teaching skills to create applications and experiences for learners and information seekers who want to make the world, and web, a more beautiful and accessible place to learn.</p>
            </div>
        </section>
    )
}

export default About