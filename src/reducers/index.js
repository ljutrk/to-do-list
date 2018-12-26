import { combineReducers } from 'redux';
import { NEW_TASK, DELETE_TASK } from '../actions/types';

const INITIAL_STATE = [
    "buy some apples",
    "could use some oranges",
    "kiwi is not bad also",
    "bananas are a must!"
]

const tasksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEW_TASK:
            return [...state, action.payload];
        case DELETE_TASK:
            return state.filter(task => {
                return task !== action.payload;
            })
        default:
            return state;
    }
}

export default combineReducers({
    tasks: tasksReducer
})