import { createSlice } from '@reduxjs/toolkit';
import { FormState } from '../types/ReduxTypes';

const initialState = {
  userInfo: [],
  userPrefs: [],
  isOpen: false,
  isValid: false,
  user: '',
} as FormState;

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setUserInfo(state, { payload }) {
      state.userInfo = payload;
    },
    setUserPrefs(state, { payload }) {
      state.userPrefs = payload;
    },
    setIsOpen(state, { payload }) {
      state.isOpen = payload;
    },
    setIsValid(state, { payload }) {
      state.isValid = payload;
    },
  },
});

export const { setUserInfo, setUserPrefs, setIsOpen, setIsValid } =
  formSlice.actions;
export default formSlice.reducer;
