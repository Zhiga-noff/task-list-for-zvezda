import React, { useContext } from 'react';

import upImage from '../../../../../../img/up.svg';
import downImage from '../../../../../../img/down.svg';
import doneImage from '../../../../../../img/done.svg';
import returnImage from '../../../../../../img/return.svg';

import style from '../../../../../../scss/modules/main/TaskField.module.scss';
import { TaskListContext } from '../../../../../context/TaskListContext';
import { CompletedTasks } from '../../../../../context/CompletedTasks';
import { completeType, taskListType } from '../../../../../store/type';

export const IconsButton = ({ itemData, index }) => {
  const { dispatchTask } = useContext(TaskListContext);
  const { dispatchCompleted } = useContext(CompletedTasks);

  const completedTaskOnClick = () => {
    dispatchTask({ type: taskListType.COMPLETED_TASK, payload: itemData.id });
    dispatchCompleted({ type: completeType.ADD_NEW_TASK, payload: itemData });
  };

  const returnToTaskList = () => {
    dispatchTask({ type: taskListType.ADD_NEW_TASK, payload: itemData });
    dispatchCompleted({ type: completeType.RETURN_TASK, payload: itemData.id });
  };

  const moveCompleteTask = (type) => {
    dispatchCompleted({
      type: type,
      payload: index,
    });
  };

  return (
    <div>
      {!itemData.isDone ? (
        <>
          <button
            className={style.button}
            onClick={() => moveCompleteTask(completeType.MOVE_UP_COMPLETED_TASK)}
          >
            <img src={upImage} alt="" />
          </button>
          <button
            className={style.button}
            onClick={() => moveCompleteTask(completeType.MOVE_DOWN_COMPLETED_TASK)}
          >
            <img src={downImage} alt="" />
          </button>
          <button className={style.button} onClick={completedTaskOnClick}>
            <img src={doneImage} alt="" />
          </button>
        </>
      ) : (
        <button className={style.button} onClick={returnToTaskList}>
          <img src={returnImage} alt="" />
        </button>
      )}
    </div>
  );
};
