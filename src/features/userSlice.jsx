import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const checkUserLogin = createAsyncThunk("user/isAuthReady");

const initialState = {
  user: null,
  isAuthReady: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload
    },
    logout: (state) => {
      state.user = null
    },
    isAuthReadyChange: (state) => {},
  },
});

export const { login, logout, isAuthReadyChange } = userSlice.actions;

export default userSlice.reducer
