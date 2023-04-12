import React from 'react';

const Simpson = ({simpson}) => {
    const {name, surname, age, info, photo} = simpson;
    return (
        <div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>age: {age}</div>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Simpson;