import React, { useState } from 'react';

export const ToolForm = () => {
    const [valueNewTask, setValueNewTask] = useState('');

    const onChangeNewTask = ({ target }) => {
        setValueNewTask(target.value);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        localStorage.setItem('task-list', valueNewTask);
        setValueNewTask('');
    };

    return (
        <form action='#' onSubmit={onSubmitForm}>
            <input type='text' value={valueNewTask} placeholder={'Новая задача'} onChange={onChangeNewTask} />
            <button className={'button button-turquoise'} type={'submit'}>Добавить +</button>
        </form>
    );
};
