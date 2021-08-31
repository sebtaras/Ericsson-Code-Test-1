interface isValidNewPasswordResponse {
  valid?: boolean;
  currentPasswordError?: string;
  newPasswordError?: string;
}

export const isValidNewPassword = (
  password: string,
  currentPassword: string,
  newPassword: string,
): isValidNewPasswordResponse => {
  if (!currentPassword && !newPassword) {
    return {
      currentPasswordError: "Password can't be empty",
      newPasswordError: "New password can't be empty",
    };
  }
  if (!currentPassword) {
    return {
      currentPasswordError: "Passwords don't match",
    };
  }
  if (!newPassword) {
    return {
      newPasswordError: "New password can't be empty",
    };
  }
  if (password !== currentPassword) {
    return {
      currentPasswordError: 'Incorrect password',
    };
  }
  if (currentPassword == password) {
    return {
      valid: true,
    };
  }
  return {valid: false};
};
