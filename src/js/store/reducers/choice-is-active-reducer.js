import { choiceType } from '../type';

export const choiceIsActiveReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case choiceType.REVERS_CHOICE_FLAG:
            return !state;
        default:
            return state;
    }
};
