import styled from 'styled-components';

export const StyledNav = styled.nav`
  width: 100%;
  height: 11vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  position: fixed;
  top: 0;
  z-index: 10;
  & button {
    background: none;
    border: none;
    font-size: 1.5rem;
    margin: 1rem;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
  }
  & .links {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.15rem;
    & a {
      color: #fff;
    }
  }
  &.mobile-nav {
    background: black;
    height: 100vh;
  }
`;

export const StyledLanding = styled.section`
  height: 100vh;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1531299579650-6158afb14c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .header-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 9;
    & a {
      background: rgba(0, 0, 0, 0.65);
      padding: 0.75rem 3rem;
      color: #fff;
      font-size: 1.15rem;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      cursor: pointer;
      font-family: 'Comfortaa', cursive;
      transition: all 0.35s ease;
      &:hover {
        background: rgba(0, 0, 0, 0.95);
        transition: all 0.35s ease;
        text-decoration: underline;
      }
    }
    & p {
      padding: 0;
      margin: 0;
      color: #fff;
      font-size: 1.35rem;
      font-weight: 300;
    }
    & img {
      height: 45%;
    }
  }
  .overlay {
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    z-index: 0;
  }
`;
