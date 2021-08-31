import {createSlice} from '@reduxjs/toolkit';
import {users} from '../../../tempData';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: users,
  },
  reducers: {
    setPassword: (state, action) => {
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
    setBio: (state, action) => {
      for (let user of state.users) {
        state.users[state.users.indexOf(user)].bio = action.payload.bio;
      }
    },
  },
});

export const {setPassword} = userSlice.actions;

export default userSlice.reducer;
