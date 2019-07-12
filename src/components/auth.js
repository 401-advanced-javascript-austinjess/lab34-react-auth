import React from 'react';
import useAuth from './hooks/useAuth';

class Auth extends React.Component {
  render() {
    let authContext = useAuth();

    const { children, capability } = this.props;

    if (!authContext.loggedIn) return null;

    if (capability && !authContext.capabilities.includes(capability))
      return null;
    return children;
  }
}

export default Auth;
