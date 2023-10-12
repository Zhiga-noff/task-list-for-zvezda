export const taskReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_NEW_TASK':
            localStorage.setItem('task-list', JSON.stringify([{ ...payload, isDone: false }, ...state]));
            return [{ ...payload, isDone: false }, ...state];
        case 'COMPLETED_TASK':
            const updateTaskList = state.filter(({ id }) => id !== payload);
            localStorage.setItem('task-list', JSON.stringify(updateTaskList));
            return updateTaskList;
        case 'SET_TASK_LIST':
            const newTaskList = localStorage.getItem('task-list');
            return JSON.parse(newTaskList) || [];
        default:
            return state;
    }
};
