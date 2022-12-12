import React from 'react';
import './Swipe.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

const Swipe = () => {
  return (
    <div className="icons">
      <IconButton className="repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="left">
        {' '}
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="star">
        {' '}
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="rigth">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Swipe;
