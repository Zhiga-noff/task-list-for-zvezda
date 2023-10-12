export const taskReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_NEW_TASK':
            localStorage.setItem('task-list', JSON.stringify([payload, ...state]));
            return [payload, ...state];
        case 'SET_TASK_LIST':
            let newTaskList = localStorage.getItem('task-list');
            return JSON.parse(newTaskList) || [];
        default:
            return state;
    }
};
