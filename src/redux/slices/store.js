import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {count1Reducer} from "./count1.slice";
import {count2Reducer} from "./count2.slice";


const rootReducer = combineReducers({
    count1:count1Reducer,
    count2:count2Reducer
});

const setupStore = ()=> configureStore({
    reducer:rootReducer
});

export {setupStore};