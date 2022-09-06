import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import { AppDispatch, RootState } from '../store';
import { setIsOpen, setNextForm } from '../store/FormSlice';

function UserInfoForm() {
  const dispatch: AppDispatch = useDispatch();
  const { isOpen } = useSelector(
    (state: RootState) => state.form,
    shallowEqual,
  );
  console.log(isOpen);
  return (
    <div className="form-container mobile" id="user-info">
      <button
        type="button"
        className="close-btn"
        onClick={() => dispatch(setIsOpen(false))}
      >
        <i className="fa-regular fa-circle-xmark close-btn" />
      </button>
      <p>Lets get started</p>
      <form>
        <div>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 125 }}
          >
            <InputLabel id="user-gender">I am a</InputLabel>
            <Select
              required
              labelId="user-gender"
              // value={age}
              // onChange={handleChange}
              label="Preferences"
            >
              <MenuItem value="Man">Man</MenuItem>
              <MenuItem value="Woman">Woman</MenuItem>
              <MenuItem value="Other">Somewhere in between</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 125 }}
          >
            <InputLabel id="user-preference">
              Looking for a
            </InputLabel>
            <Select
              required
              labelId="user-preference"
              // value={age}
              // onChange={handleChange}
              label="Preferences"
            >
              <MenuItem value="Man">Man</MenuItem>
              <MenuItem value="Woman">Woman</MenuItem>
              <MenuItem value="Other">Somewhere in between</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, maxWidth: 130 }}>
            <TextField
              id="first-name"
              label="First Name"
              variant="standard"
              required
            />
          </FormControl>
          <FormControl sx={{ m: 1, maxWidth: 130 }}>
            <TextField
              id="last-name"
              label="Last Name"
              variant="standard"
              required
            />
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, maxWidth: 70 }}>
            <TextField
              id="age-month"
              label="Month"
              variant="standard"
              required
            />
          </FormControl>
          <FormControl sx={{ m: 1, maxWidth: 70 }}>
            <TextField
              id="age-day"
              label="Day"
              variant="standard"
              required
            />
          </FormControl>
          <FormControl sx={{ m: 1, maxWidth: 100 }}>
            <TextField
              id="age-year"
              label="Year"
              variant="standard"
              required
            />
          </FormControl>
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="email@email.com"
            variant="standard"
            required
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="@username"
            variant="standard"
            required
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            required
            fullWidth
          />
        </div>
        <button
          type="button"
          onClick={() => dispatch(setNextForm(true))}
          className="btn"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default UserInfoForm;
