import { taskListType } from '../type';

export const taskReducer = (state, action) => {
  const { type, payload } = action;
  let selectTask = state[payload];

  switch (type) {
    case taskListType.ADD_NEW_TASK:
      localStorage.setItem(
        'task-list',
        JSON.stringify([
          {
            ...payload,
            isDone: false,
          },
          ...state,
        ]),
      );
      return [{ ...payload, isDone: false }, ...state];

    case taskListType.MASS_COMPLETED_TASKS:
      let newCompletedTaskList = [...state];
      for (let i = 0; i < payload.length; i++) {
        newCompletedTaskList = newCompletedTaskList.filter(
          ({ id: checkedId }) => checkedId !== payload[i],
        );
      }
      localStorage.setItem('task-list', JSON.stringify(newCompletedTaskList));
      return newCompletedTaskList;

    case taskListType.COMPLETED_TASK:
      const updateTaskList = state.filter(({ id }) => id !== payload);
      localStorage.setItem('task-list', JSON.stringify(updateTaskList));
      return updateTaskList;

    case taskListType.MOVE_UP_COMPLETED_TASK:
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
      localStorage.setItem('task-list', JSON.stringify(moveUpList));
      return moveUpList;

    case taskListType.MOVE_DOWN_COMPLETED_TASK:
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
      localStorage.setItem('task-list', JSON.stringify(moveDownList));
      return moveDownList;

    case taskListType.SET_TASK_LIST:
      const newTaskList = localStorage.getItem('task-list');
      return JSON.parse(newTaskList) || [];
    default:
      return state;
  }
};
