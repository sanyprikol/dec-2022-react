import React, {useEffect, useState} from 'react';
import axios from "axios";
import User from "../user/User";

const Users = ({setUsersId}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(value => value.data)
            .then(value => setUsers(value))
    })
    return (
        <div>
            {users.map(user => <User user={user} key={user.id} setUserId={setUsersId}/>)}
        </div>
    );
};

export default Users;