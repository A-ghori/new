// src/pages/Welcome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Welcome.css';
import axios from 'axios';

const Welcome = () => {
  const navigate = useNavigate();


  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1 className="welcome-title">Welcome to FooDo FRIES</h1>
        <p className="welcome-subtitle">Select how you want to continue</p>
        
        <div className="welcome-buttons">
          <button className="welcome-btn" onClick={() => navigate("/user/register") }>
            I am a User
          </button>
          <button className='welcome-btn' onClick={()=> navigate("/user/login")}>
            Already Have An Account
          </button>
          <button className="welcome-btn" onClick={() => navigate("/food-partner/register")}>
            I am a Food Partner
          </button>
          <button className="skip-btn" onClick={() => navigate("/home")}>
            Skip For Now
          </button>
          {/* Logout Button */}
          <button 
  onClick={async () => {
    try {
      await axios.get("http://localhost:3000/api/auth/user/logout", { withCredentials: true });
      navigate("/user/login"); // redirect to login page
    } catch (err) {
      console.log(err);
    }
  }}
>
  Logout
</button>




        </div>
      </div>
    </div>
  );
};


export default Welcome;

          