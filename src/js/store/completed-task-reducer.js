export const completedTaskReducer = (state, action) => {
    const { type, payload } = action;
    let selectTask = state[payload];

    switch (type) {
        case 'ADD_NEW_TASK':
            localStorage.setItem('completed-task-list', JSON.stringify([{ ...payload, isDone: true }, ...state]));
            return [{ ...payload, isDone: true }, ...state];
        case 'RETURN_TASK':
            const updateTaskList = state.filter(({ id }) => id !== payload);
            localStorage.setItem('completed-task-list', JSON.stringify(updateTaskList));
            return updateTaskList;

        case 'MOVE_UP_COMPLETED_TASK':
            let prevTask = state[payload - 1];

            const moveUpList = state.map((item, index) => {
                if (payload === 0) {
                    return item;
                }

                if (index === payload - 1) {
                    return selectTask;
                }

                if (index === payload) {
                    return prevTask;
                }

                return item;
            });
            localStorage.setItem('completed-task-list', JSON.stringify(moveUpList));
            return moveUpList;

        case 'MOVE_DOWN_COMPLETED_TASK':
            let nextTask = state[payload + 1];

            const moveDownList = state.map((item, index, array) => {
                if (payload === array.length - 1) {
                    return item;
                }

                if (index === payload) {
                    return nextTask;
                }

                if (index === payload + 1) {
                    return selectTask;
                }

                return item;
            });
            localStorage.setItem('completed-task-list', JSON.stringify(moveDownList));
            return moveDownList;

        case 'SET_TASK_LIST':
            let newCompletedTaskList = localStorage.getItem('completed-task-list');
            return JSON.parse(newCompletedTaskList) || [];
        default:
            return state;
    }
};
