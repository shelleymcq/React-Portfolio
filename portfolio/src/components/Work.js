import React from 'react';

import '../styles/Work.css';
import Card from './Card';
import { data } from './data';

const Work = () => {
    
    return (
        <div className="Work">
            <div className="container">
                {data.map((project) => {
                    return <Card key={project.id} {...project} />;
                })}
            </div>
        </div>
    );
};

export default Work;

