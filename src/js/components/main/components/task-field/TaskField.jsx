import React from 'react';
import { SectionLeftToolAndTask } from '../section-left/SectionLeftToolAndTask';
import { IconsButton } from './icons-button/IconsButton';
import style from '../../../../../scss/modules/main/TaskField.module.scss';

export const TaskField = () => {
    return (
        <li className={style.task}>
            <SectionLeftToolAndTask>Название чегото</SectionLeftToolAndTask>
            <IconsButton isDone={false} />

        </li>
    );
};
