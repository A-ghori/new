import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Resturant = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/auth/check', {
      withCredentials: true // <- important
    })
    .then(res => {
      const data = res.data; // axios me response JSON automatic parse ho jata hai
      if(data.success){
        setUser(data.user); // User info saved 
      } else {
        navigate('/user/login'); // Redirect to login page
      }
    })
    .catch(err => {
      console.log(err);
      navigate('/user/login');
    });
  }, []);

  if(!user) return <p> Loading.....</p>
  
  return (
    <div>
      <h1>Welcome To My Restaurant, {user.fullName}</h1>
      {/* Yahan menu aur restaurant details dikha sakte ho */}
    </div>
  );
};

export default Resturant
