import React, { useContext } from 'react';
import style from '../../../../../scss/modules/main/TaskToolBar.module.scss';
import { ToolForm } from '../tool-form/ToolForm';
import { SectionLeftToolAndTask } from '../section-left/SectionLeftToolAndTask';
import { ChoiceIsActiveContext } from '../../../../context/ChoiceIsActiveContext';

export const TaskToolBar = () => {

    const { choiceIsActiveValue, dispatchChoice } = useContext(ChoiceIsActiveContext);

    const onClickChoiceButton = () => {
        dispatchChoice({ type: 'REVERS_CHOICE_FLAG' });
    };

    return (
        <div className={style.taskToolBar}>

            <SectionLeftToolAndTask><ToolForm /></SectionLeftToolAndTask>

            <div className={style.section}>
                <button className={`${style.button} button button-orange`} onClick={onClickChoiceButton}
                >{choiceIsActiveValue ? 'Отменить выбор' : 'Выбрать задачи'}</button>
                <button className={`${style.button} button button-blue`} disabled={!choiceIsActiveValue}>Завершить
                </button>
            </div>
        </div>
    );
};

// const reversChoiceIsActiveFlag = () => {
//     setChoiceIsActive(pre => !pre);
// };


// onClick={reversChoiceIsActiveFlag}
