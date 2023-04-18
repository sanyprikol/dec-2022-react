import React from 'react';

const User = ({user, setUserId}) => {
    const {id, name, username, email, address: {street, suite, city, zipcode}, phone, website} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address: {street}
                <div>---: {suite}</div>
                <div>---: {city}</div>
                <div>---: {zipcode}</div>
            </div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <button onClick={() =>setUserId(id)}>Posts</button>
            <hr/>
        </div>
    );
};

export default User;