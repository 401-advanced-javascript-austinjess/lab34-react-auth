import React from 'react';

import TodoProvider from './components/providers/todoProvider';
import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <TodoProvider>
        <ToDo />
      </TodoProvider>
    );
  }
}
