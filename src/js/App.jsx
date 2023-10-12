import React, { useEffect, useState } from 'react';
import { Header, Main, SideBar } from './components';
import { WrapperContext } from './context/WrapperContext';

export const App = () => {
    const [taskList, setTaskList] = useState([]);


    useEffect(() => {
        setTaskList(localStorage.getItem('task-list'));
    }, []);


    const dispatch = (action) => {
        const { type, payload } = action;

        switch (type) {
            case 'ADD_NEW_TASK':
                setTaskList([payload, ...taskList]);
                break;
            default:

        }
    };

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
