import React, { useEffect, useReducer } from 'react';
import { Header, Main, SideBar } from './components';
import { WrapperContext } from './context/WrapperContext';
import { choiceIsActiveReducer, taskReducer } from './store';

export const App = () => {
    const [taskList, dispatchTask] = useReducer(taskReducer, []);
    const [dispatchChoice] = useReducer(choiceIsActiveReducer, []);


    useEffect(() => {
        let taskList = localStorage.getItem('task-list');
        console.log(taskList);
        dispatchTask({ action: 'SET_TASK_LIST', payload: taskList });
    }, []);


    return (
        <WrapperContext taskListValue={taskList} choiceIsActiveValue={'choiceIsActiveValue'} dispatchTask={dispatchTask}
                        dispatchChoice={dispatchChoice}>
            <Header />
            <div className='container'>
                <SideBar />
                <Main />
            </div>
        </WrapperContext>
    );
};
