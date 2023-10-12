import React, { useContext, useEffect, useState } from 'react';
import style from '../../../scss/modules/main/Main.module.scss';
import { TaskField, TaskToolBar } from './components';
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
                <ul className={style.taskList}>
                    {taskList.map((item, index) => <TaskField key={item?.id} itemData={item} index={index}
                                                              setCheckedId={setCheckedId}
                    />)}
                </ul>
                <div className={style.lineGrey} />
                <ul className={style.taskList}>
                    {completedList.map((item, index) => <TaskField key={item?.id} itemData={item} index={index}
                                                                   setCheckedId={setCheckedId} />)}
                </ul>
            </div>

        </main>
    );
};
