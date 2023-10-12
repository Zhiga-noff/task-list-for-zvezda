export const choiceIsActiveReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_NEW_TASK':
            return [payload, ...state];
        case 'SET_TASK_LIST':
            return [...payload];
        default:
            return state;
    }
};
