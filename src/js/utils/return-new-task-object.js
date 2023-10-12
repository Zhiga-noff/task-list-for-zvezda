export const returnNewTaskObject = (value) => {
    return {
        id: Math.random(),
        title: value,
        isDone: false,
        isChecked: false,
    };
};
