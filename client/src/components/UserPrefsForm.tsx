/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { AppDispatch, RootState } from '../store';
import { setInterests, setIsLoggedIn } from '../store/UserSlice';

const axios = require('axios').default;

function UserPrefsForm() {
  const {
    firstName,
    lastName,
    images,
    gender,
    preference,
    username,
    email,
    password,
    birthday,
    smoker,
    drinker,
    interests,
    isLoggedIn,
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
  useEffect(() => {
    dispatch(setInterests(userInterest));
  }, [userInterest, dispatch]);
  const newUser = {
    userId: nanoid(),
    firstName: firstName,
    lastName: lastName,
    images: images,
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
    console.log(newUser);
    axios
      .post('http://localhost:5000/users/addUser', newUser, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
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
    if (!submissionErr) {
      dispatch(setIsLoggedIn(true));
      submitNewUser();
    }
  }

  return (
    <div className="form-container user-pref" id="user-preferences">
      <form className="prefs" onSubmit={handleSubmit}>
        {isLoggedIn && <Navigate to="/dashboard" />}
        <p>Give us a few of your interests</p>
        <div className="interests">
          {interestsArr.map((interest: any) => {
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
                key={nanoid()}
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
