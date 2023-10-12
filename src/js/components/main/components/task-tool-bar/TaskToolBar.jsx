import React, { useState } from 'react';
import style from '../../../../../scss/modules/main/TaskToolBar.module.scss';

export const TaskToolBar = () => {
    const [choiceIsActive, setChoiceIsActive] = useState(false);
    console.log(choiceIsActive);

    const reversChoiceIsActiveFlag = () => {
        setChoiceIsActive(pre => !pre);
    };

    return (
        <div className={style.taskToolBar}>
            <div className={style.section}>
                <div className={style.checkboxContainer}>{choiceIsActive ? <></> : ''}</div>
                <form action=''>
                    <input type='text' placeholder={'Новая задача'} />
                    <button className={'button button-turquoise'}>Добавить +</button>
                </form>
            </div>

            <div className={style.section}>
                <button className={`${style.button} button button-orange`}
                        onClick={reversChoiceIsActiveFlag}>{choiceIsActive ? 'Отменить выбор' : 'Выбрать задачи'}</button>
                <button className={`${style.button} button button-blue`} disabled={!choiceIsActive}>Завершить</button>
            </div>
        </div>
    );
};
