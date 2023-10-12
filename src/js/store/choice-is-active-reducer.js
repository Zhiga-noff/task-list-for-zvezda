export const choiceIsActiveReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'REVERS_CHOICE_FLAG':
            return !state;
        default:
            return state;
    }
};
