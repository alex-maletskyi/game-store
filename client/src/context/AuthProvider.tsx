import { useState, type ReactNode } from 'react';
import { AuthContext, type AuthContextType } from './AuthContext';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const [token, setToken] = useState<string | null>(null);

  const login = (newToken: string) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  const contextValue: AuthContextType = {
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
