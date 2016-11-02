import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import logger from "redux-logger";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        math,
        user
    }),
    {},
    composeEnhancers(
        applyMiddleware(logger())
    )
);

export default store;