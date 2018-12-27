import { NEW_TASK, DELETE_TASK, EDIT_TASK, FINISH_TASK } from './types';

const addNewTask = (newTaskId, newTaskText) => {
    return {
        type: NEW_TASK,
        payload: { id: newTaskId, text: newTaskText, finished: false }
    }
}

const removeTask = taskId => {
    return {
        type: DELETE_TASK,
        payload: taskId
    }
}

const editTask = (taskId, editedTaskText) => {
    return {
        type: EDIT_TASK,
        payload: { id: taskId, text: editedTaskText }
    }
}

const finishTask = (taskId) => {
    return {
        type: FINISH_TASK,
        payload: { id: taskId, finished: true }
    }
}

export { addNewTask, removeTask, editTask, finishTask };