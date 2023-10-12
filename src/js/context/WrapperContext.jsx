import React, { useEffect } from 'react';
import { TaskListContext } from './TaskListContext';
import { ChoiceIsActiveContext } from './ChoiceIsActiveContext';

export const WrapperContext = ({ taskListValue, choiceIsActiveValue, dispatchTask, dispatchChoice, children }) => {


    return <TaskListContext.Provider value={{ taskListValue, dispatchTask }}>
        <ChoiceIsActiveContext.Provider value={{ choiceIsActiveValue, dispatchChoice }}>
            {children}
        </ChoiceIsActiveContext.Provider>
    </TaskListContext.Provider>;


};
