import React from 'react';

const User = ({user}) => {
    const {id, name, username, email, phone} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <br/>
        </div>
    );
};

export default User;