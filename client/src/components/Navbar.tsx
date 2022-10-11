import React from 'react';
import { NavLink } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Badge, styled } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { StyledNav } from '../styles/Stylesheet';
import { RootState } from '../store';

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function Navbar() {
  const { isLoggedIn } = useSelector(
    (state: RootState) => state.user,
    shallowEqual,
  );
  const notiCount = 3;
  const messageCount = 2;
  return (
    <StyledNav>
      {isLoggedIn ? (
        <div className="navbar">
          <NavLink to="/search">
            <SearchIcon color="action" />
          </NavLink>
          <NavLink to="/inbox">
            <Badge color="error" badgeContent={messageCount}>
              <ChatBubbleIcon color="action" />
            </Badge>
          </NavLink>
          <NavLink to="/dashboard">
            <button type="button">Linx</button>
          </NavLink>
          <NavLink to="/notifications">
            <Badge color="error" badgeContent={notiCount}>
              <NotificationsIcon color="action" />
            </Badge>
          </NavLink>
          <NavLink to="/profile">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              variant="dot"
            >
              <PersonIcon color="action" />
            </StyledBadge>
          </NavLink>
        </div>
      ) : (
        <div className="links">
          <NavLink to="/">Download</NavLink>
          <NavLink to="/">Safety</NavLink>
          <NavLink to="/">About Us</NavLink>
        </div>
      )}
    </StyledNav>
  );
}

export default Navbar;
