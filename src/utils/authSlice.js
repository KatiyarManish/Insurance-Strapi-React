import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    jwt: null,
    Isloading: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.jwt = action.payload;
      state.Isloading = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.jwt = null;
    },
    loading: (state) => {
      state.Isloading = true;
    },
  },
});

export const { login, logout, loading } = authSlice.actions;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectJwt = (state) => state.auth.jwt;
export const selectLoading = (state) => state.auth.Isloading;

export default authSlice.reducer;
