import {User} from '../model/User';

interface isValidUserResponse {
  valid?: boolean;
  user?: User;
  emailError?: string;
  passwordError?: string;
}

export const isValidUser = (
  email: string,
  password: string,
  users: User[],
): isValidUserResponse => {
  if (!email && !password) {
    return {
      emailError: "Email can't be empty",
      passwordError: "Password can't be empty",
    };
  }
  if (!email) {
    return {
      emailError: "Email can't be empty",
    };
  }
  if (!password) {
    return {
      passwordError: "Password can't be empty",
    };
  }
  for (const user of users) {
    if (user.email === email) {
      if (user.password === password) {
        return {
          valid: true,
          user: user,
        };
      } else {
        return {
          passwordError: 'Incorrect password',
        };
      }
    }
  }
  return {
    emailError: 'User does not exist.',
  };
};
