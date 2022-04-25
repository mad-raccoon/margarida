import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false, 
    email: null, 
    username: null, 
    roles: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      login: (state, action) => {
          state.username =  action.payload.username;
          state.email =  action.payload.email;
          state.isAuthenticated =  true;
          state.roles =  action.payload.roles;
      },
      logout: (state)=> {
        state.username =  null;
        state.email =  null;
        state.isAuthenticated =  false;
        state.roles =  [];
      },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer