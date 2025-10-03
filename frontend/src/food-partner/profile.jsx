import React from 'react';
import "../styles/profile.css";

const reels = Array.from({ length: 30 }, (_, i) => `Reel ${i + 1}`);

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-pic"></div>
        <div className="profile-info">
          <div className="business-name">Business Name</div>
          <div className="address">Address</div>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stat-box">
          <div className="stat-title">Total Meals</div>
          <div className="stat-value">43</div>
        </div>
        <div className="stat-box">
          <div className="stat-title">Customer Served</div>
          <div className="stat-value">15k</div>
        </div>
      </div>
      <div className="reels-grid">
        {reels.map((reel, idx) => (
          <div className="reel-box" key={idx}>{reel}</div>
        ))}
      </div>
    </div>
  );
};

export default Profile;