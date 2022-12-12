import React, { useState } from 'react';
import './ChatScreen.css';

function ChatScreen() {
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
  ]);

  return (
    <div className="chatScr">
      <h1>chat Screen</h1>
      {messages.map((message) => (
        <div>
          <p>{message.msg}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatScreen;
