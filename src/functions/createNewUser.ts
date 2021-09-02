import {User} from '../model/User';
import uuid from 'react-native-uuid';

export const createNewUser = (email: string, password: string): User => {
  return {
    id: uuid.v4(),
    bio: '',
    email: email,
    password: password,
  };
};
