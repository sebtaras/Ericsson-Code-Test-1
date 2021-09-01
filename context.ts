import {createContext} from 'react';
import {User} from './src/model/User';

type ContextProps = {
  loggedInUser: null | User;
  userValues: User | null | undefined;
  setLoggedInUser: (user: User | null) => void;
  updateUserBio: (bio: string) => void;
};

export const Context = createContext<ContextProps>({
  loggedInUser: null,
  userValues: null,
  setLoggedInUser: (user: User | null) => {},
  updateUserBio: (bio: string) => {},
});
