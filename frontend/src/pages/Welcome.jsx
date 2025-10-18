// src/pages/Welcome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1 className="welcome-title">Welcome to FooDo FRIES</h1>
        <p className="welcome-subtitle">Select how you want to continue</p>
        
        <div className="welcome-buttons">
          <button className="welcome-btn" onClick={() => navigate("/user/register")}>
            I am a User
          </button>
          <button className="welcome-btn" onClick={() => navigate("/food-partner/register")}>
            I am a Food Partner
          </button>
          <button className="skip-btn" onClick={() => navigate("/home")}>
            Skip For Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
