import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import AuthContext from '../context';

export default class AuthProvider extends React.Component {
  constructor(props) {
    super(props);

    const token = cookie.load('auth');

    this.state = {
      ...this.getLoginState(token),
      login: this.login,
      logout: this.logout
    };
  }

  login = (token) => {
    this.setState(this.getLoginState(token));
  };

  logout = () => {
    this.setState(this.getLoginState(null));
  };

  getLoginState = (token) => {
    if (token) {
      try {
        let user = jwt.verify(token, process.env.REACT_APP_SECRET);

        cookie.save('auth', token);
        return {
          token,
          loggedIn: true,
          capabilities: user.capabilities
        };
      } catch (err) {
        console.warn(err);
      }
    }

    cookie.remove('auth');
    return {
      token: null,
      loggedIn: false,
      capabilities: []
    };
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
