import React, { useContext } from 'react';
import { When } from './if';
import TodoContext from './todo/context';

const List = (props) => {
  const context = useContext(TodoContext);

  return (
    <div>
      <ul>
        {context.todoList &&
          context.todoList.map((item) => (
            <li
              className={`complete-${item.complete.toString()}`}
              key={item.id}
            >
              <span onClick={() => context.toggleComplete(item.id)}>
                {item.text}
              </span>
              <button onClick={() => context.toggleEdit(item.id)}>edit</button>
              <When condition={context.editing === item.id}>
                <form onSubmit={context.updateItem}>
                  <input
                    onChange={context.handleInputChange}
                    id={item.id}
                    complete={item.complete}
                    defaultValue={item.text}
                  />
                </form>
              </When>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
