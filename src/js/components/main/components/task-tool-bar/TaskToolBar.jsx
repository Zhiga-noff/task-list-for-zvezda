import React, { useContext } from 'react';
import style from '../../../../../scss/modules/main/TaskToolBar.module.scss';
import { ToolForm } from '../tool-form/ToolForm';
import { SectionLeftToolAndTask } from '../section-left/SectionLeftToolAndTask';
import { ChoiceIsActiveContext } from '../../../../context/ChoiceIsActiveContext';
import { TaskListContext } from '../../../../context/TaskListContext';

export const TaskToolBar = () => {

    const choiceIsActive = useContext(ChoiceIsActiveContext);

    return (
        <div className={style.taskToolBar}>

            <SectionLeftToolAndTask><ToolForm /></SectionLeftToolAndTask>

            <div className={style.section}>
                <button className={`${style.button} button button-orange`}
                >{choiceIsActive ? 'Отменить выбор' : 'Выбрать задачи'}</button>
                <button className={`${style.button} button button-blue`} disabled={!choiceIsActive}>Завершить</button>
            </div>
        </div>
    );
};

// const reversChoiceIsActiveFlag = () => {
//     setChoiceIsActive(pre => !pre);
// };


// onClick={reversChoiceIsActiveFlag}
