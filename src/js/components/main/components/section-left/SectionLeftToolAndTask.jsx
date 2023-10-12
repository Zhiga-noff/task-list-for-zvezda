import React, { useContext } from 'react';
import style from '../../../../../scss/modules/main/TaskToolBar.module.scss';
import { ChoiceIsActiveContext } from '../../../../context/ChoiceIsActiveContext';

export const SectionLeftToolAndTask = ({ children }) => {
    const choiceIsActive = useContext(ChoiceIsActiveContext)

    return (
        <div className={style.section}>
            <div className={style.checkboxContainer}>{choiceIsActive ? <></> : ''}</div>
            {children}
        </div>
    );
};
