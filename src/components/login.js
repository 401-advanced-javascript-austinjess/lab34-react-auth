import React, { useContext } from 'react';
import superagent from 'superagent';
import AuthContext from './auth/context';
require('dotenv').config();

const API = process.env.REACT_APP_API;

export default () => {
  let authContext = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    superagent
      .post(`${API}/signin`)
      .auth(username, password)
      .then((response) => {
        let token = response.text;
        authContext.login(token);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const logout = () => {
    authContext.logout();
  };

  if (authContext.loggedIn) {
    return <button onClick={logout}>LOG OUT</button>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" name="username" />
      <input placeholder="password" name="password" type="password" />
      <input type="submit" value="LOGIN" />
    </form>
  );
};
