import React from 'react';
import './TodoList.scss';

interface TodoListProps {
  items: {
    id: string;
    text: string;
  }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FunctionComponent<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span className='Todo-Text'>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
