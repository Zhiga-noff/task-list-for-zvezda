import React, { useContext } from 'react';

import upImage from '../../../../../../img/up.svg';
import downImage from '../../../../../../img/down.svg';
import doneImage from '../../../../../../img/done.svg';
import returnImage from '../../../../../../img/return.svg';

import style from '../../../../../../scss/modules/main/TaskField.module.scss';
import { TaskListContext } from '../../../../../context/TaskListContext';
import { CompletedTasks } from '../../../../../context/CompletedTasks';

export const IconsButton = ({ itemData }) => {
    const { dispatchTask } = useContext(TaskListContext);
    const { dispatchCompleted } = useContext(CompletedTasks);

    const completedTaskOnClick = () => {
        dispatchTask({ type: 'COMPLETED_TASK', payload: itemData.id });
        dispatchCompleted({ type: 'ADD_NEW_TASK', payload: itemData });
    };


    return (
        <div>
            {
                itemData.isDone ? <>
                    <button className={style.button}><img src={upImage} alt='' /></button>
                    <button className={style.button}><img src={downImage} alt='' /></button>
                    <button className={style.button}><img src={returnImage} alt='' /></button>

                </> : <button className={style.button} onClick={completedTaskOnClick
                }><img src={doneImage} alt='' /></button>

            }


        </div>
    );
};
