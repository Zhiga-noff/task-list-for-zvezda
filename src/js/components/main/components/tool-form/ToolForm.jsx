import React, { useState, useContext } from 'react';
import { TaskListContext } from '../../../../context/TaskListContext';
import { returnNewTaskObject } from '../../../../utils';

export const ToolForm = () => {
    const [valueNewTask, setValueNewTask] = useState('');
    const { dispatch } = useContext(TaskListContext);


    const onChangeNewTask = ({ target }) => {
        setValueNewTask(target.value);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        let newTask = returnNewTaskObject(valueNewTask);
        dispatch({ type: 'ADD_NEW_TASK', payload: newTask });

        setValueNewTask('');
    };

    return (
        <form action='#' onSubmit={onSubmitForm}>
            <input type='text' value={valueNewTask} placeholder={'Новая задача'} onChange={onChangeNewTask} />
            <button className={'button button-turquoise'} type={'submit'}>Добавить +</button>
        </form>
    );
};
