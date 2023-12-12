import { createSlice } from "@reduxjs/toolkit";

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("authState", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();

const initialState = persistedState || {
  isAuthenticated: false,
  jwt: null,
  Isloading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registeruser: (state, action) => {
      const { user, jwt } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.jwt = jwt;
      state.Isloading = false;
      saveState(state);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.jwt = null;
      saveState(state);
    },
    loading: (state) => {
      state.Isloading = true;
    },
  },
});

export const { registeruser, logout, loading } = authSlice.actions;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectJwt = (state) => state.auth.jwt;
export const selectLoading = (state) => state.auth.Isloading;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
