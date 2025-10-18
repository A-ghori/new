import React, { useState, useEffect } from 'react'
import '../styles/profile.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [profile, setProfile] = useState(null)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/api/food-partner/${id}`, { withCredentials: true })
            .then(response => {
                setProfile(response.data.foodPartner)
                setVideos(response.data.foodPartner.foodItems)
            })
            .catch(err => console.error(err))
    }, [id])

    // 🗑 DELETE VIDEO FUNCTION
    const handleDelete = async (videoId) => {
        if (!window.confirm("Are you sure you want to delete this food item?")) return;

        try {
            await axios.delete(`http://localhost:3000/api/food/${videoId}`, {
                withCredentials: true
            });
            setVideos(prev => prev.filter(v => v._id !== videoId)) // Remove from UI
            alert("Food item deleted successfully!")
        } catch (err) {
            console.error(err)
            alert("Failed to delete video.")
        }
    };

    return (
        <main className="profile-page">
            <section className="profile-header">
                <div className="profile-meta">
                    <img className="profile-avatar"
                         src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500&auto=format&fit=crop&q=60"
                         alt="avatar"
                    />
                    <div className="profile-info">
                        <div className="info-row">
                            <div>
                                <span className="profile-stat-label">Restaurant Name</span>
                                <h1 className="profile-pill profile-business">
                                    {profile?.resturant}
                                </h1>
                            </div>
                            <div>
                                <span className="profile-stat-label">Address</span>
                                <h1 className="profile-pill profile-address">
                                    {profile?.address}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="cf-btn primary" onClick={() => navigate('/create-food')}>
                    Add Food Video
                </button>

                <div className="profile-stats">
                    <div className="profile-stat">
                        <span className="profile-stat-label">Total Meals Available</span>
                        <span className="profile-stat-value">{profile?.totalMeals}</span>
                    </div>
                    <div className="profile-stat">
                        <span className="profile-stat-label">Customer Served Total</span>
                        <span className="profile-stat-value">{profile?.customerServed}</span>
                    </div>
                </div>
            </section>

            <hr className="profile-sep" />

            {/* 🎥 FOOD ITEMS GRID */}
            <section className="profile-grid">
                {videos.map((v) => (
                    <div key={v._id} className="profile-grid-item">
                        <video
                            className="profile-grid-video"
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            src={v.videos}
                            controls
                            muted
                        ></video>

                        {/* 🍽 SHOW NAME & DESCRIPTION */}
                        <h3 className="food-title">{v.name}</h3>
                        <p className="food-desc">{v.description}</p>

                        {/* 🗑 DELETE BUTTON */}
                        <button
                            className="cf-btn secondary"
                            onClick={() => handleDelete(v._id)}
                            style={{ marginTop: '10px' }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Profile
