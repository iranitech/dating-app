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
      <h1>TinderCard</h1>
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
// setPeople(data);
// console.log(people, 'innnnnnnn');

// const peopleCollectionRef = db.collection('people').get();
// console.log(peopleCollectionRef);

// console.log(peopleCollectionRef);
// useEffect(() => {
//   const getPeople = async () => {
//     const data = await getDoc(peopleCollectionRef);
//     console.log(data.Doc);
//     setPeople(data.Doc.map((doc) => ({ ...doc.data(), id: doc.id })));
//     console.log(data.Doc);
//   };
//   getPeople();
// }, []);
