import React from 'react';

import TodoProvider from './components/todo/todoProvider';
import ToDo from './components/todo/todo';
import Login from './components/login';
import Auth from './components/auth';

export default class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <Login />
        </header>
        <Auth>
          <TodoProvider>
            <ToDo />
          </TodoProvider>
        </Auth>
      </>
    );
  }
}
