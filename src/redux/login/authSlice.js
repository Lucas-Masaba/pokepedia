import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem("token", JSON.stringify({
        token: action.payload.token
      }))
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.removeItem("token")
      state.token = null
    }
  }
})

export const selectAuth = (state) => state.auth;

export const { setToken, logout } = authSlice.actions

export default authSlice.reducer;