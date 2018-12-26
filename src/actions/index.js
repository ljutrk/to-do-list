import { NEW_TASK } from './types';

const addNewTask = (task) => {
    return {
        type: NEW_TASK,
        payload: task
    }
}

export { addNewTask }