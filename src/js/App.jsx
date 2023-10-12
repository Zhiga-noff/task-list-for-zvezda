import React, { useEffect, useReducer } from 'react';
import { Header, Main, SideBar } from './components';
import { WrapperContext } from './context/WrapperContext';
import { choiceIsActiveReducer, taskReducer } from './store';

export const App = () => {
    const [taskList, dispatchTask] = useReducer(taskReducer, []);
    const [choiceIsActiveValue, dispatchChoice] = useReducer(choiceIsActiveReducer, false);


    useEffect(() => {
        dispatchTask({ type: 'SET_TASK_LIST' });
    }, []);


    return (
        <WrapperContext taskListValue={taskList} choiceIsActiveValue={choiceIsActiveValue} dispatchTask={dispatchTask}
                        dispatchChoice={dispatchChoice}>
            <Header />
            <div className='container'>
                <SideBar />
                <Main />
            </div>
        </WrapperContext>
    );
};
