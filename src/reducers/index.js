import { combineReducers } from 'redux';

import { NEW_TASK, DELETE_TASK, EDIT_TASK, ISFINISHED_TASK } from '../actions/types';

const INITIAL_STATE = [
    { id: 1, text: "buy some apples", finished: true },
    { id: 2, text: "could use some oranges", finished: false },
    { id: 3, text: "kiwi is not bad also", finished: false },
    { id: 4, text: "bananas are a must!", finished: true },
]

const tasksReducer = (state = INITIAL_STATE, action) => {
    console.log(action.payload)
    switch (action.type) {
        case NEW_TASK:
            return [...state, action.payload];
        case DELETE_TASK:
            return state.filter(task => {
                return task.id !== action.payload;
            });
        case EDIT_TASK:
            return [...state.map(task => {
                if (task.id === action.payload.id) {
                    task.text = action.payload.text;
                }
                return task;
            })];
        case ISFINISHED_TASK:
            return [...state.map(task => {
                if (task.id === action.payload.id) {
                    task.finished = action.payload.finished;
                }
                return task;
            })];
        default:
            return state;
    }
}

export default combineReducers({
    tasks: tasksReducer
})