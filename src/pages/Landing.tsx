import React from 'react';
import styled from 'styled-components';

const StyledLanding = styled.section`
  height: 100vh;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1525405705122-df4e252e363f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & p {
    padding: 0;
    margin: 0;
  }
`;
function Landing() {
  return <StyledLanding />;
}

export default Landing;
