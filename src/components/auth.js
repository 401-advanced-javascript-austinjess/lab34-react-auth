import { useContext } from 'react';
import AuthContext from './auth/context';

const Auth = (props) => {
  let authContext = useContext(AuthContext);

  const { children, capability } = props;
  if (!authContext.loggedIn) {
    return null;
  }

  if (capability && !authContext.capabilities.includes(capability)) {
    return null;
  }
  return children;
};

export default Auth;
