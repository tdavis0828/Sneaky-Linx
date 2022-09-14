/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { StyledForm, StyledLanding } from '../styles/Stylesheet';
import UserInfoForm from '../components/UserInfoForm';
import UserPrefsForm from '../components/UserPrefsForm';
import { setIsOpen } from '../store/FormSlice';
import logo from '../img/logo2.png';

function Landing() {
  const dispatch: AppDispatch = useDispatch();
  const { isOpen, nextForm } = useSelector(
    (state: RootState) => state.form,
    shallowEqual,
  );
  return (
    <StyledLanding>
      <div className="overlay" />
      <div className="header">
        <img src={logo} alt="Company Logo" />
        <button
          type="button"
          onClick={() => dispatch(setIsOpen(true))}
        >
          Create Account
        </button>
        <p>Hook ups, relationships, FWB</p>
        <p>We wont tell, if you wont.</p>
        <button type="button" className="login">
          Login
        </button>
      </div>
      <StyledForm className={isOpen ? 'open' : ''}>
        <UserInfoForm />
        {nextForm && <UserPrefsForm />}
      </StyledForm>
    </StyledLanding>
  );
}

export default Landing;
