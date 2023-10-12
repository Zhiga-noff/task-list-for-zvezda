export const completedTaskReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_NEW_TASK':
            localStorage.setItem('completed-task-list', JSON.stringify([payload, ...state]));
            return [payload, ...state];
        case 'SET_TASK_LIST':
            let newCompletedTaskList = localStorage.getItem('completed-task-list');
            return JSON.parse(newCompletedTaskList) || [];
        default:
            return state;
    }
};
