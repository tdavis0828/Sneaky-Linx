/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { setIsOpen } from '../store/FormSlice';

function UserPrefsForm() {
  const { nextForm } = useSelector(
    (state: RootState) => state.form,
    shallowEqual,
  );
  const dispatch: AppDispatch = useDispatch();

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
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            <p>Smoke?</p>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
          >
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
          <FormLabel id="demo-radio-buttons-group-label">
            <p>Drink?</p>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
          >
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
        </FormControl>
        <button type="submit" className="btn">
          Finish
        </button>
      </form>
    </div>
  );
}

export default UserPrefsForm;
