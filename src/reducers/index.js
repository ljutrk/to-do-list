import { combineReducers } from 'redux';
import { NEW_TASK, DELETE_TASK } from '../actions/types';

const INITIAL_STATE = [
    { id: 1, text: "buy some apples", finished: true },
    { id: 2, text: "could use some oranges", finished: false },
    { id: 3, text: "kiwi is not bad also", finished: false },
    { id: 4, text: "bananas are a must!", finished: true },
]

const tasksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEW_TASK:
            return [...state, action.payload];
        case DELETE_TASK:
            return state.filter(task => {
                return task.id !== action.payload;
            });
        default:
            return state;
    }
}

export default combineReducers({
    tasks: tasksReducer
})