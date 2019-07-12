import React from 'react';
import Counter from '../counter.js';
import Form from '../form';
import List from '../list';

import './todo.scss';

const ToDo = (props) => {
  return (
    <section className="todo">
      <Counter count={props} />
      <Form />
      <List />
    </section>
  );
};

export default ToDo;
