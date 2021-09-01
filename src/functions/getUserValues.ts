import {User} from '../model/User';

export const getUserValues = (
  id: number | string | number[],
  users: User[],
) => {
  for (const user of users) {
    if (user.id == id) {
      return user;
    }
  }
  return null;
};
