import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './CardStyle.css';
import db from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'people'),
      (snapShot) => {
        setPeople(snapShot.docs.map((doc) => doc.data()));
      },
      (error) => {
        throw error;
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            perventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
