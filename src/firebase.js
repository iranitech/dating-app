import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB6p8Rfro7MhgT2jaQHmvo1xpLYrO3lIfM',
  authDomain: 'decent-slice-370116.firebaseapp.com',
  projectId: 'decent-slice-370116',
  storageBucket: 'decent-slice-370116.appspot.com',
  messagingSenderId: '320596511849',
  appId: '1:320596511849:web:5d52cee4523d4bb414a6f8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
