import { NEW_TASK, DELETE_TASK, EDIT_TASK } from './types';

const addNewTask = (newTaskId, newTaskText) => {
    return {
        type: NEW_TASK,
        payload: { id: newTaskId, text: newTaskText, finished: false }
    }
}

const removeTask = id => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

const editTask = (taskId, editedTaskText) => {
    return {
        type: EDIT_TASK,
        payload: { id: taskId, text: editedTaskText }
    }
}

export { addNewTask, removeTask, editTask };