export const taskReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_NEW_TASK':
            localStorage.setItem('task-list', JSON.stringify([{ ...payload, isDone: false }, ...state]));
            return [{ ...payload, isDone: false }, ...state];

        case 'MASS_COMPLETED_TASKS':
            let newCompletedTaskList = [...state];
            for (let i = 0; i < payload.length; i++) {
                newCompletedTaskList = newCompletedTaskList.filter(({ id: checkedId }) => checkedId !== payload[i]);
            }

            console.log(newCompletedTaskList);
            return newCompletedTaskList;

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
