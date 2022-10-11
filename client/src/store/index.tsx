/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import formSlice from './FormSlice';
import UserSlice from './UserSlice';
import DataSlice from './DataSlice';

const store = configureStore({
  reducer: {
    form: formSlice,
    user: UserSlice,
    data: DataSlice,
  },
  middleware: [],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
