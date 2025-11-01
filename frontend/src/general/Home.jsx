import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const truncate = (text, maxLength = 80) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

const Home = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const videoRefs = useRef([]);

  useEffect(() => {
    const fetchVideos = () => {
      axios.get("http://localhost:3000/api/food", { withCredentials: true })
        .then(res => setVideos(res.data.foodItems))
        .catch(err => console.error("Error fetching videos:", err));
    }

    fetchVideos(); // Initial fetch
    const interval = setInterval(fetchVideos, 5000); // Auto refresh every 5 sec

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      videoRefs.current.forEach(videoEl => {
        if (videoEl) {
          try { videoEl.play(); }
          catch (err) { console.log("Autoplay prevented:", err); }
        }
      });
    }
  }, [videos]);

  return (
    <div className="reels-container">
      {videos.map((video, idx) => (
        <div className="reel" key={video._id || idx}>
          <video
            ref={el => videoRefs.current[idx] = el}
            src={video.videos}
            className="reel-video"
            loop
            playsInline
            muted
            autoPlay
          />
          <div className="reel-overlay">
            <div className="reel-description">
              {truncate(video.description, 80)}
            </div>
            <button className="reel-button" onClick={() => navigate("/resturant")}>
              Visit Store
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
