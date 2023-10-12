import React, { useContext } from 'react';
import style from '../../../../../scss/modules/main/TaskToolBar.module.scss';
import { ToolForm } from '../tool-form/ToolForm';
import { ChoiceIsActiveContext } from '../../../../context/ChoiceIsActiveContext';
import { TaskListContext } from '../../../../context/TaskListContext';
import { CompletedTasks } from '../../../../context/CompletedTasks';
import { returnCompletedTaskList } from '../../../../utils/return-completed-task-list';

export const TaskToolBar = ({ checkedId }) => {
    const { taskListValue, dispatchTask } = useContext(TaskListContext);
    const { dispatchCompleted } = useContext(CompletedTasks);
    const { choiceIsActiveValue, dispatchChoice } = useContext(ChoiceIsActiveContext);

    const onClickChoiceButton = () => {
        dispatchChoice({ type: 'REVERS_CHOICE_FLAG' });
    };


    const onClickCompletedButton = () => {
        dispatchTask({ type: 'MASS_COMPLETED_TASKS', payload: checkedId });
        const completedTaskList = returnCompletedTaskList(taskListValue, checkedId);
        dispatchCompleted({
            type: 'MASS_ADD_COMPLETED_TASKS',
            payload: completedTaskList,
        });
    };

    return (
        <div className={style.taskToolBar}>
            <div className={style.section}>
                <div className={style.checkboxContainer}>{choiceIsActiveValue ? <></> : ''}</div>
                <ToolForm />
            </div>

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
