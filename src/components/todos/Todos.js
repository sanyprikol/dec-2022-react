import React, {useEffect, useState} from 'react';
import {todosService} from "../../services/todos.service";
import Todo from "../todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.get().then(value => value.data).then(value => setTodos([...value]))
    }, [])
    return (
        <div>
            {todos.map(todo => <Todo todo={todo} key={todo.id}/>)}
        </div>
    );
};

export default Todos;