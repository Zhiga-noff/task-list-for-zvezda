import React from 'react';
import style from '../../../../../scss/modules/main/Main.module.scss';
import { TaskField } from './task-field/TaskField';

export const TaskListRender = ({ renderList, setCheckedId, textContent }) => {
    return (
        <ul className={style.taskList}>
            {renderList.length ? renderList.map((item, index) => <TaskField key={item?.id}
                                                                            itemData={item}
                                                                            index={index}
                                                                            setCheckedId={setCheckedId}
            />) : <p className={style.stub}>{textContent}</p>}
        </ul>
    );
};
