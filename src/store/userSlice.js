import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false, 
    email: null, 
    username: null, 
    role: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      login: (state, action) => {
          state.username =  action.payload.username;
          state.email =  action.payload.email;
          state.isAuthenticated =  true;
          state.role =  action.payload.role;
      },
      logout: (state)=> {
        state.username =  null;
        state.email =  null;
        state.isAuthenticated =  false;
        state.role =  null;
      },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer