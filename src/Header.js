import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Header({ backButton }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={handleClick}>
          <ArrowBackIosIcon className="header_icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header_icon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <IconButton>
          <img
            className="header-logo"
            src="https://cdn.vectorstock.com/i/1000x1000/53/09/heart-dating-logo-icon-vector-19795309.webp"
            alt="tinder logo"
          />
        </IconButton>
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header_icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
