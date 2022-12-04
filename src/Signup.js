import React, { useRef } from 'react';
import db from './firebase';
import { collection, addDoc } from '@firebase/firestore';

function Signup() {
  const nameRef = useRef();
  const url = useRef();

  const ref = collection(db, 'people');

  const handleSave = async (e) => {
    e.preventDefault();
    let data = {
      name: nameRef.current.value,
      url: url.current.value,
    };
    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <label>Enter Your Name</label>
        <input type="text" ref={nameRef} />
        <input type="text" ref={url} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;
