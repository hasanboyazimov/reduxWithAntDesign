import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const checkUserLogin = createAsyncThunk('user/isAuthReady')

const initialState = {
  user: null,
  isAuthReady: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {},
    logout: (state, { payload }) => {},
    isAuthReadyChange: (state) => {},
  },
});
