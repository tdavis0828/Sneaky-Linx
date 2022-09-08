/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { AppDispatch, RootState } from '../store';
import { setIsOpen } from '../store/FormSlice';

function UserPrefsForm() {
  const { nextForm } = useSelector(
    (state: RootState) => state.form,
    shallowEqual,
  );
  const dispatch: AppDispatch = useDispatch();
  const interests: Array<string> = [
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
      <form className="prefs">
        <p>Give us a few of your interests</p>
        <div className="interests">
          {interests.map((interest: string) => {
            return (
              <FormControlLabel
                value={interest}
                control={
                  <Checkbox
                    icon={<FavoriteBorder sx={{ fontSize: 18 }} />}
                    checkedIcon={<Favorite />}
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
