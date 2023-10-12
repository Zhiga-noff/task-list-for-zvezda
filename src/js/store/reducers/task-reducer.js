import { taskListType } from '../type';

export const taskReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case taskListType.ADD_NEW_TASK:
            localStorage.setItem('task-list', JSON.stringify([{
                ...payload,
                isDone: false,
            }, ...state]));
            return [{ ...payload, isDone: false }, ...state];

        case taskListType.MASS_COMPLETED_TASKS:
            let newCompletedTaskList = [...state];
            for (let i = 0; i < payload.length; i++) {
                newCompletedTaskList = newCompletedTaskList.filter(({ id: checkedId }) => checkedId !== payload[i]);
            }
            localStorage.setItem('task-list', JSON.stringify(newCompletedTaskList));
            return newCompletedTaskList;

        case taskListType.COMPLETED_TASK:
            const updateTaskList = state.filter(({ id }) => id !== payload);
            localStorage.setItem('task-list', JSON.stringify(updateTaskList));
            return updateTaskList;
        case taskListType.SET_TASK_LIST:
            const newTaskList = localStorage.getItem('task-list');
            return JSON.parse(newTaskList) || [];
        default:
            return state;
    }
};
