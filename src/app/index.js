import React from "react";
import {render} from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";

import App from "./containers/App";

const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const SET_NAME = "SET_NAME";
const SET_AGE = "SET_AGE";

const mathReducer = (state = {
    result: 0,
    lastValues: []
}, action) => {
    switch (action.type) {
        case ADD:
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case SUBTRACT:
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        default:
            return state;
            break;
    }
    return state;
};

const userReducer = (state = {
    name: "Earth",
    age: 22
}, action) => {
    switch (action.type) {
        case SET_NAME:
            state = {
                ...state,
                name: action.payload
            };
            break;
        case SET_AGE:
            state = {
                ...state,
                age: action.payload
            };
            break;
        default:
            return state;
            break;
    }
    return state;
};

const store = createStore(
    combineReducers({math: mathReducer, user: userReducer}),
    {},
    applyMiddleware(logger())
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

