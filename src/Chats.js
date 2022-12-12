import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
  return (
    <div className="Chats">
      <Chat
        name="isabella"
        message="hello farzin"
        timestamp="50 min ago"
        profilePic="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/11/24/16692866231160.jpg"
      />
      <Chat
        name="isi"
        message="hey ,how are you"
        timestamp="20 mins ago"
        profilePic="https://phantom-marca.unidadeditorial.es/71d25a285965c6b5dc19c340b9807d31/resize/1320/f/jpg/assets/multimedia/imagenes/2022/11/24/16692858278276.jpg"
      />
      <Chat
        name="jeno"
        message="whats up"
        timestamp="10 mins ago"
        // profilePic="https://static.wikia.nocookie.net/disney/images/5/5f/Princess_Isabel_Season_3.jpg/revision/latest?cb=20200902225843"
      />
      <Chat
        name="juli"
        message="hi hi"
        timestamp=" just now"
        profilePic="https://i2-prod.liverpoolecho.co.uk/incoming/article24457066.ece/ALTERNATES/s1200c/0_The-British-Soap-Awards-2022-Arrivals.jpg"
      />
      <Chat
        name="mery"
        message=" how is it going"
        timestamp="1 hour age"
        profilePic="https://m.media-amazon.com/images/M/MV5BOWZmYTljNjgtNGRlYy00Yjg2LTk0MjEtOGYwZmE4YjQxNTFhXkEyXkFqcGdeQXVyMTUxOTI4NTA1._V1_.jpg"
      />
    </div>
  );
}

export default Chats;
