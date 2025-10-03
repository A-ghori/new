import React from "react";
import "../styles/FoodPartnerLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FoodPartnerLogin = () => {
  const [message,setMessage] = useState()
  const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();
  const Email = e.target.elements.Email.value;
  const Contact = e.target.elements.Contact.value;
  const Password = e.target.elements.Password.value;

 try {
  
   const response = await axios.post("http://localhost:3000/api/auth/partner/login", {
     email : Email,
     password: Password,
     phone: Contact
   });

   setMessage(response.data.message || "Food Partner Login Successfully")
   if(response.data.success){

     navigate ("/resturant")
   }
 } 
 catch (error) {
  if(error.response && error.response.data.message){
    setMessage(error.response.data.message)
  }else{
    setMessage("Something Went Wrong Please Try Again Later")
  }
 }
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
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  </div>
  )
};

export default FoodPartnerLogin;