import React, { useContext } from 'react';
import TodoContext from './context';

// READS AND DISPLAYS THE COUNT FROM CONTEXT

const Count = (props) => {
  let context = useContext(TodoContext);
  return <h2>There are {context.todoList.length} items in the list</h2>;
};

export default Count;
