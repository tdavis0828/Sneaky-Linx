import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo2.png';
import { StyledLanding } from '../styles/Stylesheet';

function Landing() {
  return (
    <StyledLanding>
      <div className="overlay" />
      <div className="header-info">
        <img src={logo} alt="Company Logo" />
        <Link to="/">Create Account</Link>
        <p>Hook ups, relationships, FWB</p>
        <p>We wont tell, if you wont.</p>
      </div>
    </StyledLanding>
  );
}

export default Landing;
