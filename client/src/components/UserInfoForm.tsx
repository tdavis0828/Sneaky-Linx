import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import { AppDispatch, RootState } from '../store';
import { setIsValid } from '../store/FormSlice';
import {
  setGender,
  setPreference,
  setFirstName,
  setLastName,
  setEmail,
  setUsername,
  setBirthday,
  setPassword,
  setSmoker,
  setDrinker,
  setImages,
} from '../store/UserSlice';
import defaultUserIcon from '../img/default-user-icon.png';

function UserInfoForm() {
  const dispatch: AppDispatch = useDispatch();
  const {
    firstName,
    lastName,
    images,
    gender,
    preference,
    username,
    email,
    password,
    smoker,
    drinker,
  } = useSelector((state: RootState) => state.user, shallowEqual);
  const [bdayMonth, setBdayMonth] = useState<string>();
  const [bdayDay, setBdayDay] = useState<string>();
  const [bdayYear, setBdayYear] = useState<string>();
  const [imageDisplay, setImageDisplay] = useState<any>();
  const formattedBirthday = `${bdayMonth}/${bdayDay}/${bdayYear}`;

  function validateForm() {
    if (
      gender &&
      preference &&
      firstName &&
      lastName &&
      email &&
      password &&
      smoker &&
      drinker
    ) {
      console.log('valid');
      dispatch(setIsValid(true));
      dispatch(setBirthday(formattedBirthday));
    } else {
      console.log('Invalid');
    }
  }

  const handleImageChange = (e: any) => {
    setImageDisplay(URL.createObjectURL(e.target.files[0]));
    dispatch(setImages(e.target.files[0]));
  };

  return (
    <div className="form-container" id="user-info">
      <p>Lets get started</p>
      <div className="user-img">
        <img
          src={!images ? defaultUserIcon : imageDisplay}
          alt="profile"
        />
      </div>
      <form encType="multipart/form-data">
        <div className="user-img">
          <input
            type="file"
            name="images"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 125 }}
          >
            <InputLabel id="user-gender">I am a</InputLabel>
            <Select
              required
              labelId="user-gender"
              value={gender}
              onChange={(e) => dispatch(setGender(e.target.value))}
              label="Preferences"
            >
              <MenuItem value="Man">Man</MenuItem>
              <MenuItem value="Woman">Woman</MenuItem>
              <MenuItem value="Transgender">Transgender</MenuItem>
              <MenuItem value="Non-binary">Non-binary</MenuItem>
              <MenuItem value="Gender Fluid">Gender Fluid</MenuItem>
              <MenuItem value="N/A">N/A</MenuItem>
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
              value={preference}
              onChange={(e) =>
                dispatch(setPreference(e.target.value))
              }
              label="Preferences"
            >
              <MenuItem value="Man">Man</MenuItem>
              <MenuItem value="Woman">Woman</MenuItem>
              <MenuItem value="Transgender">Transgender</MenuItem>
              <MenuItem value="Non-binary">Non-binary</MenuItem>
              <MenuItem value="Gender Fluid">Gender Fluid</MenuItem>
              <MenuItem value="N/A">N/A</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, maxWidth: 130 }}>
            <TextField
              id="first-name"
              label="First Name"
              variant="standard"
              value={firstName}
              onChange={(e) => dispatch(setFirstName(e.target.value))}
              required
            />
          </FormControl>
          <FormControl sx={{ m: 1, maxWidth: 130 }}>
            <TextField
              id="last-name"
              label="Last Name"
              variant="standard"
              value={lastName}
              onChange={(e) => dispatch(setLastName(e.target.value))}
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
              onChange={(e) => setBdayMonth(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, maxWidth: 70 }}>
            <TextField
              id="age-day"
              label="Day"
              variant="standard"
              required
              onChange={(e) => setBdayDay(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, maxWidth: 100 }}>
            <TextField
              id="age-year"
              label="Year"
              variant="standard"
              required
              onChange={(e) => setBdayYear(e.target.value)}
            />
          </FormControl>
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="email@email.com"
            type="email"
            variant="standard"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            required
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="@username"
            variant="standard"
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
            required
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            required
            fullWidth
          />
        </div>
        <div>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 125 }}
          >
            <InputLabel id="smoker">Smoke?</InputLabel>
            <Select
              required
              labelId="smoker"
              value={smoker}
              onChange={(e) => dispatch(setSmoker(e.target.value))}
              label="Preferences"
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
              <MenuItem value="Sometimes">Sometimes</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 125 }}
          >
            <InputLabel id="drinker">Drink?</InputLabel>
            <Select
              required
              labelId="drinker"
              value={drinker}
              onChange={(e) => dispatch(setDrinker(e.target.value))}
              label="Drink?"
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
              <MenuItem value="Sometimes">Sometimes</MenuItem>
            </Select>
          </FormControl>
        </div>

        <button type="button" onClick={validateForm} className="btn">
          Next
        </button>
      </form>
    </div>
  );
}

export default UserInfoForm;
