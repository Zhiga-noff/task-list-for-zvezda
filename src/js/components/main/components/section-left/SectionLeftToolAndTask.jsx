import React from 'react';
import style from '../../../../../scss/modules/main/TaskToolBar.module.scss';

export const SectionLeftToolAndTask = ({ choiceIsActive, children }) => {
    return (
        <>
            <div className={style.checkboxContainer}>{choiceIsActive ? <></> : ''}</div>
            {children}
        </>
    );
};
