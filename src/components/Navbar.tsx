import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import {
//   FormControlLabel,
//   Switch,
//   Badge,
//   Avatar,
//   styled,
// } from '@mui/material';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import { StyledNav } from '../styles/Stylesheet';
// import defaultUserIcon from '../img/default-user-icon.png';

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     backgroundColor: '#44b700',
//     color: '#44b700',
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     '&::after': {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       borderRadius: '50%',
//       animation: 'ripple 1.2s infinite ease-in-out',
//       border: '1px solid currentColor',
//       content: '""',
//     },
//   },
//   '@keyframes ripple': {
//     '0%': {
//       transform: 'scale(.8)',
//       opacity: 1,
//     },
//     '100%': {
//       transform: 'scale(2.4)',
//       opacity: 0,
//     },
//   },
// }));

function Navbar() {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);

  function toggleNav() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    openNav === true ? setOpenNav(false) : setOpenNav(true);
    console.log(openNav);
  }
  return (
    <StyledNav>
      <div className="links">
        <NavLink to="/">Download</NavLink>
        <NavLink to="/">Safety</NavLink>
        <NavLink to="/">About Us</NavLink>
      </div>
      {isLoggedIn && (
        <>
          <button
            type="button"
            className="nav-button"
            onClick={toggleNav}
          >
            <i className="fa-solid fa-bars" />
          </button>
          {/* <div className="search-bar">
            <TextField
              defaultValue="Looking for someone?"
              variant="filled"
            />
          </div> */}

          {/* Icons for notifications */}
          {/* <div className="notification-icons">
            <Badge color="primary" badgeContent={1}>
              <MailIcon />
            </Badge>
            <Badge color="primary" badgeContent={1}>
              <NotificationsIcon />
            </Badge>
          </div> */}

          {/* Icon for user image and username */}
          {/* <div className="user-icon">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar alt="User Icon" src={defaultUserIcon} />
            </StyledBadge>
            <p>@username</p> */}
          {/* <p>{isLoggedIn ? 'Sign Out' : 'Sign In'}</p> */}
          {/* </div> */}
        </>
      )}
      {/* <div className="theme-toggler">
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Dark/Light Mode"
        />
      </div> */}
    </StyledNav>
  );
}

export default Navbar;
