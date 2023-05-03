import React from 'react';

const Todo = ({todo}) => {
    const {userId, title, completed} = todo;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
            <hr/>
        </div>
    );
};

export default Todo;