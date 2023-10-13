import React, { useContext, useState } from 'react';
import { TaskListContext } from '../../../../context/TaskListContext';
import { returnNewTaskObject } from '../../../../utils';
import style from '../../../../../scss/modules/main/TaskToolBar.module.scss';
import { taskListType } from '../../../../store/type';

export const ToolForm = () => {
  const [valueNewTask, setValueNewTask] = useState('');
  const [disabledButtonAdd, setDisabledButtonAdd] = useState(false);
  const { dispatchTask } = useContext(TaskListContext);

  const onChangeNewTask = ({ target }) => {
    setValueNewTask(target.value);
    setDisabledButtonAdd(false);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (!valueNewTask) {
      setDisabledButtonAdd(true);
      return;
    }

    let newTask = returnNewTaskObject(valueNewTask);
    dispatchTask({ type: taskListType.ADD_NEW_TASK, payload: newTask });

    setValueNewTask('');
  };

  return (
    <form action="#" onSubmit={onSubmitForm}>
      <input
        type="text"
        className={disabledButtonAdd ? style.error : ''}
        value={valueNewTask}
        placeholder={'Новая задача'}
        onChange={onChangeNewTask}
      />
      <button
        className={'button button-turquoise'}
        type={'submit'}
        disabled={disabledButtonAdd}
      >
        Добавить +
      </button>
    </form>
  );
};
