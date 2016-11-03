import { ADD, SUBTRACT } from '../actions';

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

export default mathReducer;
