import {users} from '../../tempData';

interface isValidResponse {
  valid?: boolean;
  emailError?: string;
  passwordError?: string;
}

export const isValidUser = (
  email: string,
  password: string,
): isValidResponse => {
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
