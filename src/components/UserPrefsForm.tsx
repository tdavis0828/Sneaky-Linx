/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
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
  // const interests = ['Nature', 'Swimming', 'Sports'];
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
      <p>Tell us about yourself</p>
      <form className="prefs">
        <div className="radio-buttons">
          <RadioGroup defaultValue="Yes" name="radio-buttons-group">
            Smoke?
            <FormControlLabel
              value="Yes"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              value="No"
              control={<Radio />}
              label="No"
            />
            <FormControlLabel
              value="Sometimes"
              control={<Radio />}
              label="Sometimes"
            />
          </RadioGroup>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
          >
            Drink?
            <FormControlLabel
              value="Yes"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              value="No"
              control={<Radio />}
              label="No"
            />
            <FormControlLabel
              value="Sometimes"
              control={<Radio />}
              label="Sometimes"
            />
          </RadioGroup>
        </div>
        <div className="interests">
          <FormControlLabel
            value="Nature"
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            }
            label="Nature"
          />
        </div>
        <button type="submit" className="btn">
          Finish
        </button>
      </form>
    </div>
  );
}

export default UserPrefsForm;
