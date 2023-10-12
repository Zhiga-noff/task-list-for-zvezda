import React, { useContext } from 'react';
import style from '../../../../../scss/modules/main/TaskToolBar.module.scss';
import { ChoiceIsActiveContext } from '../../../../context/ChoiceIsActiveContext';
import { CheckBox } from './checkbox-block/CheckBox';

export const SectionLeftToolAndTask = ({ children, isDone = false }) => {
    const { choiceIsActiveValue } = useContext(ChoiceIsActiveContext);

    return (
        <div className={style.section}>
            <div className={style.checkboxContainer}>{choiceIsActiveValue && !isDone ? <></> : ''}</div>
            {children}
        </div>
    );
};
