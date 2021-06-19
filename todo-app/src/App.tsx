import React from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FunctionComponent = () => {
  const todos = [{ id: 'T1', text: 'finish the task' }];

  const todoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
