import React, { useEffect, useState } from "react";
import "../styles/profile.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reels,setReels] = useState(null)


  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/api/food-partner/${id}`, { 
      
         withCredentials: true
      })
      .then((response) => {
        setProfile(response.data.foodPartner);
        setReels(response.data.foodPartner.foodItems)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
        setError("Failed to fetch profile");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        {profile.imageUrl ? (
          <img src={profile.imageUrl} alt="Profile" className="profile-pic" />
        ) : (
          <div className="profile-pic-placeholder">No Image</div>
        )}
        <div className="profile-info">
          <div className="business-name">{profile?.resturant}</div>
          <div className="address">{profile?.address}</div>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stat-box">
          <div className="stat-title">Total Meals</div>
          <div className="stat-value">{profile?.totalMeals || 0}</div>
        </div>
        <div className="stat-box">
          <div className="stat-title">Customer Served</div>
          <div className="stat-value">{profile?.customerServed || 0}</div>
        </div>
      </div>
      <div className="reels-grid">
        {reels.map((reel, idx) => (
          <div className="reel-box" key={idx}>
            {reel}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;