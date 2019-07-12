import React, { useContext } from 'react';
// import useAuth from './hooks/useAuth';
import AuthContext from './auth/authProvider';

class Auth extends React.Component {
  render() {
    let authContext = useContext(AuthContext);
    console.log(authContext);

    const { children, capability } = this.props;

    if (!authContext.loggedIn) return null;

    if (capability && !authContext.capabilities.includes(capability))
      return null;
    return children;
  }
}

export default Auth;
