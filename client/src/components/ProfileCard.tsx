import React from 'react';
import { nanoid } from 'nanoid';
import { Chip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import { StyledProfileCard } from '../styles/Stylesheet';

type UserProps = {
  username: string;
  profilePicture?: string;
  interests1: any;
  getNewUser?: () => void;
};

function ProfileCard({
  username,
  profilePicture = '',
  getNewUser,
  interests1,
}: UserProps) {
  const interests = ['Fising', 'Golfing', 'Drawing', 'Tatooos'];
  function handleLike() {
    console.log('liked');
    console.log(interests1);
  }
  return (
    <StyledProfileCard>
      <img src={profilePicture} alt="user profile" />
      <div className="user-information">
        <p className="header">@{username}, 32</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Obcaecati, quisquam!
        </p>
      </div>
      <div className="user-interests">
        {interests.map((interest: any) => {
          return (
            <Chip
              label={interest}
              color="primary"
              size="medium"
              key={nanoid()}
            />
          );
        })}
      </div>
      <div className="user-interactions">
        <button
          type="button"
          className="skip-btn"
          onClick={getNewUser}
        >
          <DoNotDisturbAltIcon />
        </button>
        <button type="button" className="message-btn">
          <SendIcon />
        </button>
        <button
          type="button"
          className="like-btn"
          onClick={handleLike}
        >
          <FavoriteBorderIcon />
        </button>
      </div>
    </StyledProfileCard>
  );
}

export default ProfileCard;
