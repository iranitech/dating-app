import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
