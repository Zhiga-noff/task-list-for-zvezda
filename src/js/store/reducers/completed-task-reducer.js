import { completeType } from '../type';

export const completedTaskReducer = (state, action) => {
  const { type, payload } = action;
  let selectTask = state[payload];

  switch (type) {
    case completeType.ADD_NEW_TASK:
      localStorage.setItem(
        'completed-task-list',
        JSON.stringify([
          {
            ...payload,
            isDone: true,
          },
          ...state,
        ]),
      );
      return [{ ...payload, isDone: true }, ...state];

    case completeType.MASS_ADD_COMPLETED_TASKS:
      localStorage.setItem('completed-task-list', JSON.stringify([...payload, ...state]));
      return [...payload, ...state];

    case completeType.RETURN_TASK:
      const updateTaskList = state.filter(({ id }) => id !== payload);
      localStorage.setItem('completed-task-list', JSON.stringify(updateTaskList));
      return updateTaskList;

    case completeType.SET_TASK_LIST:
      let newCompletedTaskList = localStorage.getItem('completed-task-list');
      return JSON.parse(newCompletedTaskList) || [];
    default:
      return state;
  }
};
