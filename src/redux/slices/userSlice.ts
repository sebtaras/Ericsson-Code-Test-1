import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {users} from '../../../tempData';
import {User} from '../../model/User';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: users,
  },
  reducers: {
    addNewUser: (state, action: PayloadAction<addNewUserAction>) => {
      console.log('created user', action.payload.user);
      state.users.push(action.payload.user);
    },
    setPassword: (state, action: PayloadAction<setPasswordAction>) => {
      for (let user of state.users) {
        if (
          user.email === action.payload.email &&
          user.password === action.payload.currentPassword
        ) {
          state.users[state.users.indexOf(user)].password =
            action.payload.newPassword;
        }
      }
    },
    setBio: (state, action: PayloadAction<setBioAction>) => {
      for (let user of state.users) {
        if (user.id == action.payload.userId)
          state.users[state.users.indexOf(user)].bio = action.payload.bio;
      }
    },
  },
});

interface setPasswordAction {
  email: string;
  currentPassword: string;
  newPassword: string;
}

interface setBioAction {
  bio: string;
  userId: number | string | number[];
}

interface addNewUserAction {
  user: User;
}

export const {setPassword, setBio, addNewUser} = userSlice.actions;

export default userSlice.reducer;
