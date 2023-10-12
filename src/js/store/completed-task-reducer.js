export const completedTaskReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_NEW_TASK':
            localStorage.setItem('completed-task-list', JSON.stringify([{ ...payload, isDone: true }, ...state]));
            return [{ ...payload, isDone: true }, ...state];
        case 'RETURN_TASK':
            const updateTaskList = state.filter(({ id }) => id !== payload);
            localStorage.setItem('completed-task-list', JSON.stringify(updateTaskList));
            return updateTaskList;
        case 'SET_TASK_LIST':
            let newCompletedTaskList = localStorage.getItem('completed-task-list');
            return JSON.parse(newCompletedTaskList) || [];
        default:
            return state;
    }
};
