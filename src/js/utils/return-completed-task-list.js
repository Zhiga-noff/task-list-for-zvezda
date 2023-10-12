export const returnCompletedTaskList = (taskList, checkedId) => {
    const completedTaskList = [];

    for (let i = 0; i < checkedId.length; i++) {
        taskList.forEach((task) => {
            if (task.id === checkedId[i]) {
                completedTaskList.push({ ...task, isDone: true });
            }
        });
    }
    console.log(completedTaskList);
    return completedTaskList;
};
