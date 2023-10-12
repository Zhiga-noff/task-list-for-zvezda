import React from 'react';
import { SectionLeftToolAndTask } from '../section-left/SectionLeftToolAndTask';
import { IconsButton } from './icons-button/IconsButton';
import style from '../../../../../scss/modules/main/TaskField.module.scss';

export const TaskField = ({ itemData }) => {

    return (
        <li className={` ${style.task} ${itemData.isDone ? style.completedTask : ''}`}>
            <SectionLeftToolAndTask>{itemData.title}</SectionLeftToolAndTask>
            <IconsButton itemData={itemData} />

        </li>
    );
};
