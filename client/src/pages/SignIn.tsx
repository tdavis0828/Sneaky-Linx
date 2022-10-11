import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StyledSignIn } from '../styles/Stylesheet';
import { setIsLoggedIn } from '../store/UserSlice';

function SignIn() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e: any) {
    e.preventDefault();
    fetch('users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.status);
        if (result.status === 'ok') {
          console.log('logged in');
          dispatch(setIsLoggedIn(true));
          navigate('/dashboard');
        } else {
          console.log('not logged in');
        }
      });
  }

  return (
    <StyledSignIn>
      <div className="sign-in-form">
        <p className="header">Login</p>
        <form onSubmit={handleSubmit} encType="application/json">
          <input
            type="text"
            placeholder="@username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p className="sign-up-link">
          Need an account? <Link to="/sign-up">Sign Up</Link> here
        </p>
      </div>
    </StyledSignIn>
  );
}

export default SignIn;
