import { SET_NAME, SET_AGE } from '../actions';

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

export default userReducer;
