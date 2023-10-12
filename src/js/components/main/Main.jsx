import React from 'react';
import style from '../../../scss/modules/main/Main.module.scss';
import { TaskToolBar } from './components';

export const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.line} />
            <div className={style.container}>
                <TaskToolBar />
            </div>

        </main>
    );
};
