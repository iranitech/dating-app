import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Header from './Header';
import Home from './Home';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={ <TinderCards />} />
      </Routes>
    </div>
  );
}

export default App;
