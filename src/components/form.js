import React, { useContext } from 'react';
import TodoContext from './context';

const Form = (props) => {
  let context = useContext(TodoContext);
  console.log(context);
  return (
    <div>
      <form onSubmit={context.addItem}>
        <input
          placeholder="Add To Do List Item"
          onChange={context.handleInputChange}
        />
      </form>
    </div>
  );
};

export default Form;
