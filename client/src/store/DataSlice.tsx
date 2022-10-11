import { createSlice } from '@reduxjs/toolkit';
import { DataState } from '../types/ReduxTypes';

const initialState = {
  usersData: [],
} as DataState;

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setUsersData(state, { payload }) {
      state.usersData = payload;
    },
  },
});

export const { setUsersData } = dataSlice.actions;
export default dataSlice.reducer;
