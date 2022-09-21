import styled from 'styled-components';

export const StyledNav = styled.nav`
  width: 95%;
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
  & .header {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    z-index: 9;
    & small {
      margin: 0.5rem;
    }
    & button {
      background: rgba(0, 0, 0, 0.65);
      padding: 0.75rem 3rem;
      color: #fff;
      font-size: 1.15rem;
      text-decoration: none;
      border: none;
      border-radius: 5px;
      font-family: 'Comfortaa', cursive;
      transition: all 0.35s ease;
      cursor: pointer;
      margin: 1rem;
      &.login {
        background: none;
        padding: 0;
        font-weight: 300;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.95);
        text-decoration: underline;
        transition: all 0.35s ease;
      }
    }
    & p {
      padding: 0;
      margin: 0;
      color: #fff;
      font-size: 1.25rem;
      font-weight: 300;
    }
    & img {
      height: 45%;
      width: 100%;
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

export const StyledForm = styled.section`
  position: absolute;
  bottom: 0;
  z-index: 10;
  width: 95%;
  height: 85vh;
  transform: translateY(800px);
  transition: transform 0.55s ease;
  &.open {
    transform: translateY(0);
    transition: transform 0.55s ease;
  }
  & div {
    display: flex;
    width: 100%;
    &.user-pref {
      position: absolute;
      top: 0;
      height: 100%;
      transform: translateX(400px);
      transition: transform 0.40s ease;
    }
    &.open {
      transform: translateX(0);
      transition: transform 0.40s ease;
    }
  }
  & p {
    font-size: 1.15rem;
  }
  & button {
    position: absolute;
    bottom: 3%;
    width: 75%;
    height: 45px;
    font-family: 'Comfortaa', cursive;
    background: #3282B8;
    color: #fff;
    border: none;
    border-radius: 5px;
    &.btn {
      left: 15%;
      cursor: pointer;
      }
  }
  & .form-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 25px 25px 0 0;
    & form {
      margin: 2rem;
      height: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      }
    }
    & .interests {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      & label {
        margin: 0;
      }
    }
    & .close-btn {
      position: absolute;
      top: 0;
      right: 0;
      margin: .55rem;
      font-size: 1.5rem;
      background: none;
      color: #000;
    }
  }
  }
  @media (min-width: 768px) {
    width: 50%;
    height: 70%;
    bottom: 15%;
    & .form-container {
      border-radius: 25px;
    }
  }
  @media (min-width: 992px) {
    width: 35%;
    height: 65%;
  }
`;
