import React, { useEffect, useReducer } from 'react';
import { Header, Main, SideBar } from './components';
import { WrapperContext } from './context/WrapperContext';
import {
  choiceIsActiveReducer,
  completedTaskReducer,
  taskReducer,
} from './store/reducers';

export const App = () => {
  const [taskList, dispatchTask] = useReducer(taskReducer, []);
  const [completedTaskList, dispatchCompleted] = useReducer(completedTaskReducer, []);
  const [choiceIsActiveValue, dispatchChoice] = useReducer(choiceIsActiveReducer, false);

  useEffect(() => {
    dispatchTask({ type: 'SET_TASK_LIST' });
    dispatchCompleted({ type: 'SET_TASK_LIST' });
  }, []);

  return (
    <WrapperContext
      taskListValue={taskList}
      choiceIsActiveValue={choiceIsActiveValue}
      completedTaskList={completedTaskList}
      dispatchTask={dispatchTask}
      dispatchChoice={dispatchChoice}
      dispatchCompleted={dispatchCompleted}
    >
      <Header />
      <div className="container">
        <SideBar />
        <Main />
      </div>
    </WrapperContext>
  );
};
