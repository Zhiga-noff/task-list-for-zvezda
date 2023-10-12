import React, { useState } from 'react';

export const ToolForm = () => {
    const [valueNewTask, setValueNewTask] = useState('');

    const onChangeNewTask = ({ target }) => {
        setValueNewTask(target.value);
    };

    return (
        <form action=''>
            <input type='text' value={valueNewTask} placeholder={'Новая задача'} onChange={onChangeNewTask} />
            <button className={'button button-turquoise'}>Добавить +</button>
        </form>
    );
};
