import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'dark',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = slice.actions;
export const themeReducer = slice.reducer;
