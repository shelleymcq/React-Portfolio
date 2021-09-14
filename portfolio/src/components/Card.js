import React from 'react';

const {PUBLIC_URL} = process.env;
console.log(PUBLIC_URL);

const Card = ({ name, img, repo, deployed, link, description, tech, cardStyle }) => {
    return (
        <div className={`card ${cardStyle}`}>
            <img src={PUBLIC_URL + img} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{tech}</p>
            </div>  
            <div className={'links'}>
                <a href={repo} target="_blank" rel="noopener noreferrer">The Repo</a>
                {deployed && <a href={link} target="_blank" rel="noopener noreferrer">The App</a>}
            </div>
        </div>
    );
};

export default Card;

