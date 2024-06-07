import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Blogin from './components/Blogin/Blogin';
import Llogin from './components/Llogin/Llogin';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogin" element={<Blogin />} />
          <Route path="/llogin" element={<Llogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
