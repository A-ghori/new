import React from "react";
import "../styles/FoodPartnerLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FoodPartnerLogin = () => {
  const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();
  const Email = e.target.elements.Email.value;
  const Contact = e.target.elements.Contact.value;
  const Password = e.target.elements.Password.value

 
    const response = await axios.post("http://localhost:3000/api/auth/partner/login", {
      email : Email,
      password: Password,
      phone: Contact
    });
       console.log(response.data);
       navigate ("/resturant")
  } 

  return(
  <div className="auth-page">
    <div className="card">
      <h2 className="title">Food Partner Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="Email" placeholder="Enter email" />
        <label>Password</label>
        <input type="password" name="Password" placeholder="Enter password" />
<label>Contact</label>
        <input type="contact" name="Contact" placeholder="Enter Contact Number" />

        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  </div>
  )
};

export default FoodPartnerLogin;