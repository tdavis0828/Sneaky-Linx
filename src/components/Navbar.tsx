import React from 'react';
import styled from 'styled-components';
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
    </StyledNav>
  );
}

export default Navbar;
