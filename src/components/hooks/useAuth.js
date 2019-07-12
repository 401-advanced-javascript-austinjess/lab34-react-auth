import { useContext } from 'react';
import AuthContext from '../auth/context';

export default () => {
  return useContext(AuthContext);
};
