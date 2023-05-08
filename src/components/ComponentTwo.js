import React from 'react';
import {useDispatch} from "react-redux";
import {count2Actions} from "../redux";

const ComponentTwo = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(count2Actions.inc())}>increment</button>
            <button onClick={() => dispatch(count2Actions.dec())}>decrement</button>
            <button onClick={() => dispatch(count2Actions.res(222))}>reset</button>
        </div>
    );
};

export {ComponentTwo};