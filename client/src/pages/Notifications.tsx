import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../store';
import { StyledNotiPage, StyledNoti } from '../styles/Stylesheet';

function Notifications() {
  const { usersData } = useSelector(
    (state: RootState) => state.data,
    shallowEqual,
  );
  return (
    <StyledNotiPage>
      {usersData.map((user) => {
        return (
          <StyledNoti>
            You linked with @{user.username} <small>2 min ago</small>
          </StyledNoti>
        );
      })}
    </StyledNotiPage>
  );
}

export default Notifications;
