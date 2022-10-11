import React, { useState, useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../store';
import { StyledDashboard } from '../styles/Stylesheet';
import ProfileCard from '../components/ProfileCard';

function Dashboard() {
  const [index, setIndex] = useState<any>(1);
  const { usersData } = useSelector(
    (state: RootState) => state.data,
    shallowEqual,
  );

  const getRandomNumber = useCallback(async () => {
    const num = Math.floor(Math.random() * usersData.length);
    setIndex(num);
  }, [usersData]);

  const randomUser = usersData[index];
  const { username, interests, images, birthday } = randomUser;

  const calculateAge = (year: any) => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const userAge = currentYear - parseInt(year.slice(-4), 10);
    return userAge;
  };
  const age = calculateAge(birthday);

  return (
    <StyledDashboard>
      {usersData.length && (
        <ProfileCard
          username={username}
          age={age}
          getNewUser={getRandomNumber}
          interests={interests}
          profilePicture={images}
        />
      )}
    </StyledDashboard>
  );
}

export default Dashboard;
