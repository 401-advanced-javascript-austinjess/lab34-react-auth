import React from 'react';

import TodoProvider from './components/todo/todoProvider';
import ToDo from './components/todo/todo';
import Login from './components/login';

export default class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <Login />
        </header>
        <TodoProvider>
          <ToDo />
        </TodoProvider>
      </>
    );
  }
}
