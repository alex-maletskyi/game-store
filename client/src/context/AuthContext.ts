import { createContext } from 'react';

// 1. define what our context will hold
export type AuthContextType = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

// 2. create and export the context
export const AuthContext = createContext<AuthContextType>({
  token: null,
  login: () => {},
  logout: () => {},
});