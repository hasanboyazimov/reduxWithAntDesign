import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user"),
  isAuthReady: localStorage.getItem("isAuth"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
      state.isAuthReady = true;
      localStorage.setItem("user", payload);
      localStorage.setItem("isAuth", true);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthReady = false;
      localStorage.clear();
    },
    isAuthReadyChange: (state) => {
      state.isAuthReady;
    },
  },
});

export const { login, logout, isAuthReadyChange } = userSlice.actions;

export default userSlice.reducer;
