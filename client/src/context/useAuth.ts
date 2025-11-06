import { useContext } from 'react';
import { AuthContext } from './AuthContext'; // this path is now correct

// create and export a custom hook to *use* the context
export const useAuth = () => {
  return useContext(AuthContext);
};