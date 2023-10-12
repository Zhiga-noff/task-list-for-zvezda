import React, { useState } from 'react';
import style from '../../../../../scss/modules/main/TaskToolBar.module.scss';
import { ToolForm } from '../tool-form/ToolForm';
import { SectionLeftToolAndTask } from '../section-left/SectionLeftToolAndTask';

export const TaskToolBar = () => {
    const [choiceIsActive, setChoiceIsActive] = useState(false);

    const reversChoiceIsActiveFlag = () => {
        setChoiceIsActive(pre => !pre);
    };

    return (
        <div className={style.taskToolBar}>
            <div className={style.section}>
                <SectionLeftToolAndTask choiceIsActive={choiceIsActive}><ToolForm /></SectionLeftToolAndTask>
            </div>

            <div className={style.section}>
                <button className={`${style.button} button button-orange`}
                        onClick={reversChoiceIsActiveFlag}>{choiceIsActive ? 'Отменить выбор' : 'Выбрать задачи'}</button>
                <button className={`${style.button} button button-blue`} disabled={!choiceIsActive}>Завершить</button>
            </div>
        </div>
    );
};
