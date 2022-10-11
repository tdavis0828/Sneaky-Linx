import styled from 'styled-components';

export const StyledNav = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  z-index: 10;
  color: #fff;
  & button {
    width: 150px;
    height: 50px;
    background: none;
    border: none;
    font-size: 1.5rem;
    margin: 1rem;
    color: #eb1d36;
    background: #cfd2cf;
    border: 2px solid #eb1d36;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.55);
    &:active {
      transform: scale(0.98);
    }
  }
  & .navbar {
    width: 100%;
    height: 12vh;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px 25px 0px 0px;
    & img {
      width: 100px;
      height: 100px;
    }
  }
  & .links {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.25rem;
    position: absolute;
    top: 5%;
    & a {
      color: #eb1d36;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const StyledSignIn = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  .sign-in-form {
    height: 70vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    position: absolute;
    bottom: 25%;
    left: 10%;
    & a {
      color: #eb1d36;
    }
    & .header {
      font-size: 2rem;
      margin: 0;
    }
  }
  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & button {
      width: 90%;
      height: 25%;
      border-radius: 5px;
      border: none;
      background: #eb1d36;
      color: #fff;
      font-size: 1.15rem;
    }
    & input {
      background: none;
      border: none;
      border-bottom: 1px solid #000;
      width: 300px;
      height: 40px;
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 3rem;
      &:focus {
        outline: none;
      }
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
    & a {
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
  width: 100%;
  height: 85vh;
  display: flex;
  & div {
    display: flex;
    width: 100%;
    & .user-img{
      display: flex;
      justify-content: center;
      align-items: center;
      & img {
        height: 130px;
        width: 130px;
        border-radius: 50%;
      }
    }
    
    &.user-pref {
      position: absolute;
      top: 0;
      height: 100%;
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
    background: #EB1D36;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.15rem;
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
    justify-content: center;
    align-items: center;
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
      cursor: pointer;
    }
  }
  }
  @media (min-width: 768px) {
    width: 60%;
    height: 80%;
  }
  @media (min-width: 992px) {
    width: 50%;
    height: 80%;
  }
  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export const StyledDashboard = styled.main`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledProfileCard = styled.section`
  position: absolute;
  top: 1rem;
  height: 85vh;
  width: 95%;
  border-radius: 1rem;
  color: #fff;
  background: #cfd2cf;
  display: flex;
  border: 1px solid #eb1d36;
  color: #000;
  flex-direction: column;
  & .header {
    font-size: 1.25rem;
    font-weight: 300;
    margin: 0.15rem;
  }
  & img {
    width: 100%;
    height: 28.5rem;
    margin: 0 0.5rem auto auto;
    border-radius: 1rem 1rem 0 0;
  }
  & .user-information {
    margin: 0.25rem 0.75rem;
    font-size: 0.85rem;
  }
  & .user-interests {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  & .user-interactions {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1.5rem;
    & button {
      border: none;
      padding: 1rem;
      color: #fff;
      border-radius: 50%;
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.4);
      &:active {
        transform: scale(0.95);
      }
      &.skip-btn {
        background: #eb1d36;
      }
      &.message-btn {
        background: #3282b8;
        padding: 0.85rem 4rem;
        border-radius: 5%;
      }
      &.like-btn {
        background: #4e9f3d;
      }
    }
  }
`;

export const StyledSearchPage = styled.main`
  height: 80vh;
  overflow: scroll;
  position: relative;
  & .search-input {
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 25px;
    & input {
      width: 80%;
      height: 25px;
      border: 1px solid #fff;
      border-radius: 25px;
      text-align: center;
      font-size: 1.05rem;
    }
  }
`;

export const SearchCard = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  & img {
    width: 40px;
    height: 40px;
    margin: 1rem;
  }
`;

export const StyledNotiPage = styled.main`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: scroll;
  & p {
    position: absolute;
    top: 0;
  }
`;

export const StyledNoti = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin: 0.5rem 0;
  & small {
    margin-left: 1rem;
    opacity: 80%;
    font-size: 0.75rem;
  }
`;
