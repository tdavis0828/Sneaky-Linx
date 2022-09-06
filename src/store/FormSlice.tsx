import { createSlice } from '@reduxjs/toolkit';
import { FormState } from '../types/ReduxTypes';

const initialState = {
  userInfo: [],
  userPrefs: [],
  isOpen: false,
  nextForm: false,
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
    setNextForm(state, { payload }) {
      state.nextForm = payload;
    },
  },
});

export const { setUserInfo, setUserPrefs, setIsOpen, setNextForm } =
  formSlice.actions;
export default formSlice.reducer;
