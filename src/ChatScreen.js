import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import './ChatScreen.css';

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'elen',
      img: 'https://cam.co.uk/wp-content/uploads/2022/02/ElenR-1-Spotlight-880x1200.jpg',
      msg: 'hello hello',
    },
    {
      name: 'elen',
      img: 'https://cam.co.uk/wp-content/uploads/2022/02/ElenR-1-Spotlight-880x1200.jpg',
      msg: 'how are yopu',
    },
    {
      name: 'elen',
      img: 'https://cam.co.uk/wp-content/uploads/2022/02/ElenR-1-Spotlight-880x1200.jpg',
      msg: 'What r u up to?',
    },
    {
      msg: 'hey im very well thanks',
    },
  ]);
  const handelSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { msg: input }]);
    setInput('');
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestemp">YOU HAVE MATCH IN 12/12/2022</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_msg">
            <Avatar
              className="chatScreen_img"
              alt={message.name}
              src={message.img}
            />
            <p className="chatScreen_txt">{message.msg}</p>
          </div>
        ) : (
          <div className="chatScreen_msg">
            <p className="chatScreen_txtUser">{message.msg}</p>
          </div>
        )
      )}

      <form className="chatScreen_input">
        <input
          className="chatScreen_inputField"
          placeholder="Type a message..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handelSend}
          type="submit"
          className="chatScreen_inputButton"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
