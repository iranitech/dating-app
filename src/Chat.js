import React from 'react';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

import './Chat.css';
function Chat({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat_img" src={profilePic} />
        <div className="chat_details">
          <h3>{name}</h3>
          <p>{message}</p>
        </div>
        <p className="chat_timestemp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
