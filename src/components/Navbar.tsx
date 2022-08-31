import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo2.png';

const StyledNav = styled.nav`
  height: 10vh;
  width: 100%;
  position: fixed;
  top: 0;
  & img {
    width: 275px;
    height: 90px;
  }
`;

function Navbar() {
  return (
    <StyledNav>
      <img src={logo} alt="company logo" />
      <div className="links">
        <NavLink to="/">Download</NavLink>
        <NavLink to="/">Safety</NavLink>
        <NavLink to="/">About Us</NavLink>
      </div>
      <div className="search-bar">
        <p>Search Bar</p>
      </div>
      <div className="buttons">
        <NavLink to="/">Toggle switch</NavLink>
        <NavLink to="/">Notification Icon</NavLink>
      </div>
    </StyledNav>
  );
}

export default Navbar;
