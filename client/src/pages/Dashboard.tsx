import React, { useState } from 'react';
import { StyledDashboard } from '../styles/Stylesheet';
import ProfileCard from '../components/ProfileCard';

function Dashboard() {
  const [userData, setUserData] = useState<any>([]);
  const [currentUserIndex, setCurrentUserIndex] = useState<any>(0);

  const getNewUser = () => {
    setCurrentUserIndex(Math.round(Math.random() * userData.length));
  };
  const getData = async () => {
    const res = await fetch('/users');
    const data = await res.json();
    console.log(data);
    setUserData(data);
    getNewUser();
  };
  const { username, interests } = userData[currentUserIndex];

  // useEffect(() => {
  getData();
  // }, []);
  console.log(userData);

  return (
    <StyledDashboard>
      {userData && (
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
