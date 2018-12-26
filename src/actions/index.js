import { NEW_TASK, DELETE_TASK } from './types';

const addNewTask = (task) => {
    return {
        type: NEW_TASK,
        payload: task
    }
}

const removeTask = (task) => {
    return {
        type: DELETE_TASK,
        payload: task
    }
}

export { addNewTask, removeTask };