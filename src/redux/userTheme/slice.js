import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'userTheme',
  initialState: {
    theme: 'light',
  },
  reducers: {
    handleDarkTheme(state) {
      state.theme = 'dark';
    },
    handleLightTheme(state) {
      state.theme = 'light';
    },
  },
});

export const ChangeThemeReducer = slice.reducer;
export const { handleDarkTheme, handleLightTheme } = slice.actions;
export const selectTheme = state => state.userTheme.theme;
