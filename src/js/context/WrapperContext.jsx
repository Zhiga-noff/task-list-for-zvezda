import React, { useEffect } from 'react';
import { TaskListContext } from './TaskListContext';
import { ChoiceIsActiveContext } from './ChoiceIsActiveContext';

export const WrapperContext = ({ children }) => {
    

    return <TaskListContext.Provider value={[]}>
        <ChoiceIsActiveContext.Provider value={false}>
            {children}
        </ChoiceIsActiveContext.Provider>
    </TaskListContext.Provider>;


};
