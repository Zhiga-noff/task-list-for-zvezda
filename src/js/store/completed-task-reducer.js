export const completedTaskReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_NEW_TASK':
            localStorage.setItem('completed-task-list', JSON.stringify([{ ...payload, isDone: true }, ...state]));
            return [{ ...payload, isDone: true }, ...state];
        case 'SET_TASK_LIST':
            let newCompletedTaskList = localStorage.getItem('completed-task-list');
            return JSON.parse(newCompletedTaskList) || [];
        default:
            return state;
    }
};
