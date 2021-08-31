import {createContext} from 'react';
import {User} from './src/model/User';

type ContextProps = {
  loggedInUser: null | User;
  setLoggedInUser: (user: User | null) => void;
};

export const Context = createContext<ContextProps>({
  loggedInUser: null,
  setLoggedInUser: (user: User | null) => {},
});
