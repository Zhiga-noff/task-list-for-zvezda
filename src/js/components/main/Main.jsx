import React, { useEffect, useState } from 'react';
import style from '../../../scss/modules/main/Main.module.scss';
import { TaskToolBar } from './components';

export const Main = () => {
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        setTaskList(localStorage.getItem('task-list'));
    });

    return (
        <main className={style.main}>
            <div className={style.line} />
            <div className={style.container}>
                <TaskToolBar />
                <ul className={style.taskList}>
                    {taskList}
                    {/*{taskList.map((item) => <TaskField key={item?.id} itemData={item} />)}*/}
                </ul>
            </div>

        </main>
    );
};
