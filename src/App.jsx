import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import TalkToUs from './components/TalkToUs';
import Records from './components/Records'; 
import './App.css';
import ChatList from './components/ChatList';
import MainContent from './components/MainContent';
import Chat from './components/Chat';
import Favorite from './components/Favorite';
import NearBy from './components/NearBy';

const App = () => {
  return (
    <Router>
       <div className="App">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/talktous" element={<TalkToUs />} />
          <Route path="/chats" element={<ChatList />} /> 
          <Route path="/chat/:id" element={<Chat />} /> {/* Define route for individual chat */}
 <Route path="/Favorite" element={<Favorite />} />
 <Route path="/records" element={<Records />} />
 <Route path="/nearby" element={<NearBy />} />
  <Route path="/foryou" element={<MainContent />} />
    <Route path="/MainContent" element={<MainContent />} />


         </Routes>
      </div>
    </Router>
  );
};

export default App;

