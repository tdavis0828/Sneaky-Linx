import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import UserInfoForm from '../components/UserInfoForm';
import UserPrefsForm from '../components/UserPrefsForm';
import { RootState } from '../store';
import { StyledForm } from '../styles/Stylesheet';

function SignUp() {
  const { isValid } = useSelector(
    (state: RootState) => state.form,
    shallowEqual,
  );
  console.log(isValid);

  return (
    <StyledForm>
      {isValid === true ? <UserPrefsForm /> : <UserInfoForm />}
    </StyledForm>
  );
}

export default SignUp;
