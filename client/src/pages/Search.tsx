import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../store';
import { StyledSearchPage, SearchCard } from '../styles/Stylesheet';
import defaultImage from '../img/default-user-icon.png';

function Search() {
  const [searchInput, setSearchInput] = useState<any>('');
  const { usersData } = useSelector(
    (state: RootState) => state.data,
    shallowEqual,
  );
  return (
    <StyledSearchPage>
      <div className="search-input">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="@username"
        />
      </div>
      <div className="users">
        {usersData.map((user) => {
          return (
            <SearchCard>
              <img src={defaultImage} alt="profile" />@{user.username}
            </SearchCard>
          );
        })}
      </div>
    </StyledSearchPage>
  );
}

export default Search;
