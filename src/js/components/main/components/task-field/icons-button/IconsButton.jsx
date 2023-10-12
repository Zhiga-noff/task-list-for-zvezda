import React from 'react';

import upImage from '../../../../../../img/up.svg';
import downImage from '../../../../../../img/down.svg';
import doneImage from '../../../../../../img/done.svg';
import returnImage from '../../../../../../img/return.svg';

import style from '../../../../../../scss/modules/main/TaskField.module.scss';

export const IconsButton = ({ isDone }) => {
    return (
        <div>
            <button className={style.button}><img src={upImage} alt='' /></button>
            <button className={style.button}><img src={downImage} alt='' /></button>
            {
                isDone ? <button className={style.button}><img src={returnImage} alt='' /></button> :
                    <button className={style.button}><img src={doneImage} alt='' /></button>
            }

        </div>
    );
};
