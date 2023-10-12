import React, { useContext } from 'react';
import style from '../../../../../scss/modules/main/TaskToolBar.module.scss';
import { ToolForm } from '../tool-form/ToolForm';
import { SectionLeftToolAndTask } from '../section-left/SectionLeftToolAndTask';
import { ChoiceIsActiveContext } from '../../../../context/ChoiceIsActiveContext';
import { TaskListContext } from '../../../../context/TaskListContext';

export const TaskToolBar = ({ checkedId }) => {
    const { dispatchTask } = useContext(TaskListContext);
    const { choiceIsActiveValue, dispatchChoice } = useContext(ChoiceIsActiveContext);

    const onClickChoiceButton = () => {
        dispatchChoice({ type: 'REVERS_CHOICE_FLAG' });
    };


    const onClickCompletedButton = () => {
        dispatchTask({ type: 'MASS_COMPLETED_TASKS', payload: checkedId });
    };

    return (
        <div className={style.taskToolBar}>

            <SectionLeftToolAndTask><ToolForm /></SectionLeftToolAndTask>

            <div className={style.section}>
                <button className={`${style.button} button button-orange`} onClick={onClickChoiceButton}
                >{choiceIsActiveValue ? 'Отменить выбор' : 'Выбрать задачи'}</button>
                <button className={`${style.button} button button-blue`} disabled={!choiceIsActiveValue}
                        onClick={onClickCompletedButton}>Завершить
                </button>
            </div>
        </div>
    );
};

// const reversChoiceIsActiveFlag = () => {
//     setChoiceIsActive(pre => !pre);
// };


// onClick={reversChoiceIsActiveFlag}
