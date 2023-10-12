import React, { useEffect, useReducer, useState } from 'react';
import { Header, Main, SideBar } from './components';
import { WrapperContext } from './context/WrapperContext';
import { taskReducer } from './store/task-reducer';

export const App = () => {
    const [taskList, dispatch] = useReducer(taskReducer, []);


    useEffect(() => {
        let taskList = localStorage.getItem('task-list');
        console.log(taskList);
        dispatch({ action: 'SET_TASK_LIST', payload: taskList });
    }, []);


    return (
        <WrapperContext taskListValue={taskList} choiceIsActiveValue={'choiceIsActiveValue'} dispatch={dispatch}>
            <Header />
            <div className='container'>
                <SideBar />
                <Main />
            </div>
        </WrapperContext>
    );
};
