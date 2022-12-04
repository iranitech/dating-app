import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './CardStyle.css';
// import db from './firebase';
// import { collection, getDocs } from '@firebase/firestore';

const data = [
  {
    name: 'jack',
    url: 'https://faroutmagazine.co.uk/static/uploads/2022/03/Titanic-Jack-1.jpg',
  },
  {
    name: 'jenifer',
    url: 'https://media.vanityfair.com/photos/618c0614fdf674f0522a9fb7/master/pass/LBY_210805_JENNIFER_LAWRENCE_VF_09G_Shot_10_028_QC_sRGB_LR.jpg',
  },
  {
    name: 'mike',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Mike_Tyson_2019_by_Glenn_Francis.jpg',
  },
];

function TinderCards() {
  const [people, setPeople] = useState(data);

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
// const peopleCollectionRef = collection(firestore, 'people');

// useEffect(() => {
//   const getPeople = async () => {
//     const data = await getDocs(peopleCollectionRef);
//     setPeople(data.Docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };
//   getPeople();
// }, [people]);
// setPeople(data);
// console.log(people, 'innnnnnnn');
// useEffect(() => {
//   firestore
//     .collection('people')
//     .onSnapshot((snapShot) =>
//       setPeople(snapShot.docs.map((doc) => doc.data()))
//     );
// }, [people]);

// console.log(people);
