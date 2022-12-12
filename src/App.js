import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Header from './Header';
import Chats from './Chats';
import TinderCards from './TinderCards';
import Swipe from './Swipe';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/chat/:person"
          element={[<Header backButton="/chat" />, <ChatScreen />]}
        />
        <Route path="/chat" element={[<Header backButton="/" />, <Chats />]} />
        <Route
          path="/signup"
          element={[<Header backButton="/" />, <Signup />]}
        />
        <Route path="/" element={[<Header />, <TinderCards />, <Swipe />]} />
      </Routes>
    </div>
  );
}

export default App;
