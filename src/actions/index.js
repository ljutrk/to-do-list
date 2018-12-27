import { NEW_TASK, DELETE_TASK } from './types';

const addNewTask = (newTaskText, newTaskId) => {
    return {
        type: NEW_TASK,
        payload: { id: newTaskId, text: newTaskText, finished: false }
    }
}

const removeTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export { addNewTask, removeTask };