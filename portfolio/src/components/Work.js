import React from 'react';

import '../styles/Work.css';
import Card from './Card';
import { data } from './data';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';


const Work = () => {    
    
    const [index, setIndex] = useState(0);

    const slideLeft = () => {
        if (index -1 >= 0) {
            setIndex(index - 1);
        }
    };

    const slideRight = () => {
        if (index + 1 <= data.length - 1) {
            setIndex(index + 1);
        }
    };




    return (
        <div className="Work">
            <div className="container">
                <div className="card-container">

                    <FontAwesomeIcon
                        onClick={slideLeft}
                        className="leftBtn"
                        icon={faChevronLeft}
                    />

                    <FontAwesomeIcon
                        onClick={slideRight}
                        className="rightBtn"
                        icon={faChevronRight}
                    />

                {data.map((project, n) => {
                    let position = n > index ? "nextCard" 
                        : n === index ? "activeCard" 
                        : "prevCard";
                    return <Card key={project.id} {...project} cardStyle={position} />;
                })}
                </div>
            </div>
        </div>
    );
};

export default Work;

