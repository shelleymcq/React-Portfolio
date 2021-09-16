import React from 'react';
import '../../styles/Resume.css';
import Pdf from '../../resume.pdf';

const Resume = () => {
    return (
        <section className="resume">
            <h2>My Experience</h2>
            <a href={Pdf} target ="_blank">download my resume</a>
            <p>
            Solution-oriented Full Stack Web Developer applying teaching background and strong technical skills towards building client-side and server-side applications. Earned my certificate in web development from Georgia Tech, where I enhanced my skills in HTML, CSS, JavaScript, node.js, MySQL, MongoDB, and React. My science teaching experience has honed my ability to communicate, collaborate, and manage learners of all levels. I want a role that leverages both my tech and teaching skills to create applications and experiences for learners and information seekers who want to make the world, and web, a more beautiful and accessible place to learn.
            </p>

            <h3>Front-End Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Responsive Design</li>
            </ul>
            <h3>Back-End Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>Postman</li>
                <li>MongoDB, Mongoose</li>
                <li>GraphQL</li>
            </ul>
        </section>
    )
}

export default Resume