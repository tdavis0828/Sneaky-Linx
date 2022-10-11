import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StyledLanding } from '../styles/Stylesheet';
import logo from '../img/logo2.png';
import { setUsersData } from '../store/DataSlice';

function Landing() {
  const dispatch = useDispatch();
  const getData = useCallback(async () => {
    const res = await fetch('/users');
    const data = await res.json();
    dispatch(setUsersData(data));
  }, [dispatch]);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <StyledLanding>
      <div className="overlay" />
      <div className="header">
        <img src={logo} alt="Company Logo" />
        <Link to="/sign-up">Create Account</Link>
        <p>Hook ups, relationships, FWB</p>
        <p>We wont tell, if you wont.</p>
        <Link to="/sign-in" className="sign-in">
          Login
        </Link>
      </div>
    </StyledLanding>
  );
}

export default Landing;
