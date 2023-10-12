import React from 'react';
import { SectionLeftToolAndTask } from '../section-left/SectionLeftToolAndTask';
import { IconsButton } from './icons-button/IconsButton';
import style from '../../../../../scss/modules/main/TaskField.module.scss';

export const TaskField = ({ itemData }) => {
    const { title, isDone, id } = itemData;

    return (
        <li className={style.task}>
            <SectionLeftToolAndTask>{title}</SectionLeftToolAndTask>
            <IconsButton isDone={isDone} />

        </li>
    );
};
