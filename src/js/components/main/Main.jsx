import React, { useContext, useEffect, useState } from 'react';
import style from '../../../scss/modules/main/Main.module.scss';
import { TaskField, TaskToolBar } from './components';
import { TaskListContext } from '../../context/TaskListContext';

export const Main = () => {
    const { taskListValue: taskList } = useContext(TaskListContext);
    return (
        <main className={style.main}>
            <div className={style.line} />
            <div className={style.container}>
                <TaskToolBar />
                <ul className={style.taskList}>
                    {/*{taskList}*/}
                    {taskList.map((item) => <TaskField key={item?.id} itemData={item} />)}
                </ul>
            </div>

        </main>
    );
};
