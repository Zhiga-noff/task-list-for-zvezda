import React, { useContext, useEffect, useState } from 'react';
import { IconsButton } from './icons-button/IconsButton';
import style from '../../../../../scss/modules/main/TaskField.module.scss';
import { ChoiceIsActiveContext } from '../../../../context/ChoiceIsActiveContext';

export const TaskField = ({ itemData, index, setCheckedId }) => {
    const [isChecked, setIsChecked] = useState(false);
    const { choiceIsActiveValue } = useContext(ChoiceIsActiveContext);

    useEffect(() => {
        if (!choiceIsActiveValue) {
            setIsChecked(false);
            setCheckedId([]);
        }
    }, [choiceIsActiveValue]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setCheckedId(pre => [itemData.id, ...pre]);

        if (isChecked) {
            setCheckedId(pre => pre.filter(idTask => idTask !== itemData.id));
        }
    };


    return (
        <li className={` ${style.task} ${itemData.isDone ? style.completedTask : ''}`}>
            <label>
                {choiceIsActiveValue && !itemData.isDone ?
                    <input type='checkbox' name={itemData.title} checked={isChecked}
                           onChange={handleCheckboxChange} /> : <div></div>}

                {itemData.title}
            </label>
            <IconsButton itemData={itemData} index={index} />

        </li>
    );
};
