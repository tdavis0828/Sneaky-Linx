/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import formSlice from './FormSlice';

const store = configureStore({
  reducer: {
    form: formSlice,
  },
  middleware: [],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
