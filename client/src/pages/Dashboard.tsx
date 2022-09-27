import React, { useState, useEffect, useCallback } from 'react';
import { StyledDashboard } from '../styles/Stylesheet';
import ProfileCard from '../components/ProfileCard';

function Dashboard() {
  const [userData, setUserData] = useState<any>([]);
  const [randomUser, setRandomUser] = useState<any>({});
  const { username, interests } = randomUser;

  // getData is triggered only upon initial render and will retruieve all the users and update them into state
  const getData = useCallback(async () => {
    const res = await fetch('/users');
    const data = await res.json();
    setUserData(data);
  }, []);

  // getNewUser is triggered when userData array changes, if userData gets a new member, a new random user is selected and updated into state
  const getNewUser = useCallback(async () => {
    if (userData.length) {
      const randomUser =
        userData[Math.round(Math.random() * userData.length)];
      setRandomUser(randomUser);
    }
  }, [userData]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    getNewUser();
  }, [userData, getNewUser]);
  return (
    <StyledDashboard>
      {userData.length && (
        <ProfileCard
          username={username}
          getNewUser={getNewUser}
          interests1={interests}
        />
      )}
    </StyledDashboard>
  );
}

export default Dashboard;
