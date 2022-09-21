import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../types/ReduxTypes';

const initialState = {
  userId: '',
  gender: '',
  firstName: '',
  lastName: '',
  preference: '',
  username: '',
  email: '',
  password: '',
  phoneNumber: 0,
  ethnicity: '',
  birthday: 0,
  height: 0,
  weight: 0,
  religion: '',
  college: '',
  smoker: '',
  drinker: '',
  interests: [],
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId(state, { payload }) {
      state.userId = payload;
    },
    setGender(state, { payload }) {
      state.gender = payload;
    },
    setFirstName(state, { payload }) {
      state.firstName = payload;
    },
    setLastName(state, { payload }) {
      state.lastName = payload;
    },
    setPreference(state, { payload }) {
      state.preference = payload;
    },
    setUsername(state, { payload }) {
      state.username = payload;
    },
    setEmail(state, { payload }) {
      state.email = payload;
    },
    setPassword(state, { payload }) {
      state.password = payload;
    },
    setPhoneNumber(state, { payload }) {
      state.phoneNumber = payload;
    },
    setEthnicity(state, { payload }) {
      state.ethnicity = payload;
    },
    setBirthday(state, { payload }) {
      state.birthday = payload;
    },
    setHeight(state, { payload }) {
      state.height = payload;
    },
    setWeight(state, { payload }) {
      state.weight = payload;
    },
    setReligion(state, { payload }) {
      state.religion = payload;
    },
    setCollege(state, { payload }) {
      state.college = payload;
    },
    setSmoker(state, { payload }) {
      state.smoker = payload;
    },
    setDrinker(state, { payload }) {
      state.drinker = payload;
    },
    setInterests(state, { payload }) {
      state.interests = payload;
    },
  },
});

export const {
  setUserId,
  setGender,
  setFirstName,
  setLastName,
  setPreference,
  setUsername,
  setEmail,
  setPassword,
  setPhoneNumber,
  setEthnicity,
  setBirthday,
  setHeight,
  setWeight,
  setReligion,
  setCollege,
  setSmoker,
  setDrinker,
  setInterests,
} = userSlice.actions;
export default userSlice.reducer;
