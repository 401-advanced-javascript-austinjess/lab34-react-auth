import React from 'react';
import ReactDOM from 'react-dom';

import AuthProvider from './components/auth/authProvider';
import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      <AuthProvider>
        <App />
      </AuthProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
