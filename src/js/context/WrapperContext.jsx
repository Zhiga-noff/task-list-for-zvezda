import React, { useEffect } from 'react';
import { TaskListContext } from './TaskListContext';
import { ChoiceIsActiveContext } from './ChoiceIsActiveContext';
import { CompletedTasks } from './CompletedTasks';

export const WrapperContext = ({
                                   taskListValue,
                                   choiceIsActiveValue,
                                   completedTaskList,
                                   dispatchTask,
                                   dispatchChoice,
                                   dispatchCompleted,
                                   children,
                               }) => {


    return <TaskListContext.Provider value={{ taskListValue, dispatchTask }}>
        <CompletedTasks.Provider value={{ completedTaskList, dispatchCompleted }}>
            <ChoiceIsActiveContext.Provider value={{ choiceIsActiveValue, dispatchChoice }}>
                {children}
            </ChoiceIsActiveContext.Provider>
        </CompletedTasks.Provider>
    </TaskListContext.Provider>;


};
