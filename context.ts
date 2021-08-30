import {createContext} from 'react';

export const Context = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => {},
});
