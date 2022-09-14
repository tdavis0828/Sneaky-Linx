import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from '../components/Navbar';

function Main() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Outlet />
    </>
  );
}

export default Main;
