import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
    //BEM
    <div className="header">
      <IconButton>
        {' '}
        <PersonIcon className="header_icon" fontSize="large" />
      </IconButton>
      <IconButton>
        {' '}
        <img
          className="header-logo"
          src="https://www.pngfind.com/pngs/m/13-131073_this-post-is-a-part-of-tinder-logo.png"
          alt="tinder logo"
        />
      </IconButton>
      <IconButton>
        <ForumIcon className="header_icon" />
      </IconButton>
    </div>
  );
}

export default Header;
