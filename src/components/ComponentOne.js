import React from 'react';
import {count1Actions} from "../redux";
import {useDispatch} from "react-redux";

const ComponentOne = () => {
   const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() =>dispatch(count1Actions.increment())}>increment</button>
            <button onClick={() =>dispatch(count1Actions.decrement())}>decrement</button>
            <button onClick={() =>dispatch(count1Actions.reset())}>reset</button>
        </div>
    );
};

export {ComponentOne};