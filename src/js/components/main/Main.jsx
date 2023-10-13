import React, { useContext, useState } from 'react';
import style from '../../../scss/modules/main/Main.module.scss';
import { TaskListRender, TaskToolBar } from './components';
import { TaskListContext } from '../../context/TaskListContext';
import { CompletedTasks } from '../../context/CompletedTasks';

export const Main = () => {
  const { taskListValue: taskList } = useContext(TaskListContext);
  const { completedTaskList: completedList } = useContext(CompletedTasks);
  const [checkedId, setCheckedId] = useState([]);

  return (
    <main className={style.main}>
      <div className={style.line} />
      <div className={style.container}>
        <TaskToolBar checkedId={checkedId} />
        <TaskListRender
          renderList={taskList}
          setCheckedId={setCheckedId}
          textContent={'Добавтье задачу'}
        />

        <div className={style.lineGrey} />
        <TaskListRender
          renderList={completedList}
          setCheckedId={setCheckedId}
          textContent={'Нет завершенных задач'}
        />
      </div>
    </main>
  );
};
