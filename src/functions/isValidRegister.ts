import {User} from '../model/User';

interface isValidRegisterResponse {
  valid?: boolean;
  emailError?: string;
  passwordError?: string;
}

export const isValidRegister = (
  email: string,
  password: string,
  repeatPassword: string,
  users: User[],
): isValidRegisterResponse => {
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
  if (password != repeatPassword) {
    return {
      passwordError: 'Passwords do not match',
    };
  }
  for (const user of users) {
    if (user.email === email) {
      return {
        emailError: 'Email already registered',
      };
    }
  }
  return {
    valid: true,
  };
};
