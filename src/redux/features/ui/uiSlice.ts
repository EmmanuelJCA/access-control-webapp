import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { getCookieItem } from '@/utils/browser-storage';

interface UIState {
  isDarkMode: boolean | null;
}

const initialState: UIState = {
  isDarkMode: getCookieItem('prefersDarkMode'),
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleIsDarkMode(state, action: PayloadAction<boolean>) {
      state.isDarkMode = action.payload;
    }
  }
});

export const { toggleIsDarkMode } = uiSlice.actions;

export default uiSlice.reducer;
