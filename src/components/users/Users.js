import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../user/User";
import UserForm from "../userForm/UserForm";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState(null);

    useEffect(()=> {
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    }, [allUsers])

    return (
        <div>
            <UserForm setAllUsers={setAllUsers}/>
            <hr/>
            {users.map(user=> <User user={user} key={user.id}/>)}
        </div>
    );
};

export default Users;