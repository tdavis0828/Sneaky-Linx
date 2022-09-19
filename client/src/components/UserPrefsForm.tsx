/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { AppDispatch, RootState } from '../store';
import { setIsOpen } from '../store/FormSlice';
import { setInterests } from '../store/UserSlice';

const axios = require('axios').default;

function UserPrefsForm() {
  const { nextForm } = useSelector(
    (state: RootState) => state.form,
    shallowEqual,
  );
  // const { interests } = useSelector(
  //   (state: RootState) => state.user,
  //   shallowEqual,
  // );
  const {
    firstName,
    lastName,
    gender,
    preference,
    username,
    email,
    password,
    birthday,
    smoker,
    drinker,
    interests,
  } = useSelector((state: RootState) => state.user, shallowEqual);
  const dispatch: AppDispatch = useDispatch();
  const interestsArr: Array<string> = [
    'Nature',
    'Swimming',
    'Sports',
    'Traveling',
    'Dancing',
    'Cooking',
    'Photography',
    'Learning',
    'Art',
    'Music',
    'Exercise',
    'Animals',
    'Cosmetics',
    'Theatre',
    'Food',
    'Vlogging',
    'Blogging',
    'Gaming',
    'History',
    'Fantasy Sports',
    'Hunting',
    'Philathropy',
    'Concerts',
    'Video Games',
    'Religion',
    'Tattoos',
    'Camping',
    'Surfing',
    'School',
    'Fishing',
  ];

  const [userInterest, setUserInterest] = useState<any>([]);
  const [formComplete, setFormComplete] = useState<boolean>(false);
  const [submissionErr, setSubmissionErr] = useState<any>('');

  function handleInterests(interest: any) {
    if (userInterest.includes(interest)) {
      const filtered = userInterest.filter((item: any) => {
        return item !== interest;
      });
      setUserInterest(filtered);
    } else {
      setUserInterest((userInterest: any) => [
        ...userInterest,
        interest,
      ]);
    }
  }

  const newUser = {
    userId: nanoid(),
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    preference: preference,
    username: username,
    email: email,
    password: password,
    birthday: birthday,
    smoker: smoker,
    drinker: drinker,
    interests: interests,
  };

  function submitNewUser() {
    axios
      .post('http://localhost:5000/users/addUser', newUser)
      .then((res: any) => {
        console.log(res.data);
      })
      .catch((error: any) => {
        console.log(error);
        setSubmissionErr(error);
      });
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(setInterests(userInterest));
    if (!submissionErr) {
      setFormComplete(true);
    }
    submitNewUser();
  }

  // const getData = async () => {
  //   const res = await fetch('/users');
  //   const data = await res.json();
  //   console.log(data);
  // };
  // getData();
  return (
    <div
      className={
        nextForm
          ? 'form-container user-pref open'
          : 'form-container user-pref'
      }
      id="user-preferences"
    >
      <button
        type="button"
        className="close-btn"
        onClick={() => dispatch(setIsOpen(false))}
      >
        <i className="fa-regular fa-circle-xmark close-btn" />
      </button>
      <form className="prefs" onSubmit={handleSubmit}>
        {formComplete && <Navigate to="/dashboard" />}
        <p>Give us a few of your interests</p>
        <div className="interests">
          {interestsArr.map((interest: string) => {
            return (
              <FormControlLabel
                value={interest}
                control={
                  <Checkbox
                    icon={<FavoriteBorder sx={{ fontSize: 18 }} />}
                    checkedIcon={<Favorite />}
                    onClick={() => handleInterests(interest)}
                  />
                }
                label={interest}
              />
            );
          })}
        </div>
        <button type="submit" className="btn">
          Finish
        </button>
      </form>
    </div>
  );
}

export default UserPrefsForm;
