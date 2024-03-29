import { SignalCellularNullTwoTone } from '@material-ui/icons';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = state => state.user.user;

export default userSlice.reducer;
