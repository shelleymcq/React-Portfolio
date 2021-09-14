import React from 'react';

const {PUBLIC_URL} = process.env;
console.log(PUBLIC_URL);

const Card = ({ name, img, cardStyle }) => {
    return (
        <div className={`card ${cardStyle}`}>
            <img src={PUBLIC_URL + img} alt={name} />
            <h3>{name}</h3>
        </div>
    );
};

export default Card;

