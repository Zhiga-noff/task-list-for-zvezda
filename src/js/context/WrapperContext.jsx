import React, { useEffect } from 'react';
import { TaskListContext } from './TaskListContext';
import { ChoiceIsActiveContext } from './ChoiceIsActiveContext';

export const WrapperContext = ({ taskListValue, choiceIsActiveValue, dispatch, children }) => {


    return <TaskListContext.Provider value={{ taskListValue, dispatch }}>
        <ChoiceIsActiveContext.Provider value={{ choiceIsActiveValue, dispatch }}>
            {children}
        </ChoiceIsActiveContext.Provider>
    </TaskListContext.Provider>;


};
