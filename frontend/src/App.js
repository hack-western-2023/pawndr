import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CreateAccount from './components/createaccount';
import Login from './components/login';
import Home from './components/home';
import { UserProvider } from './UserContext';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsAuthenticated(loggedIn);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/home" element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
