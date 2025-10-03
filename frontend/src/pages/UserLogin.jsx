import React from "react";
import "../styles/UserLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserLogin = () => {
  const navigate = useNavigate()
  const [message,setMessage] = useState();
  const handleSubmit = async(e) => {
     e.preventDefault()

     const Email = e.target.elements.Email.value;
     const Password = e.target.elements.Password.value;
     const Contact = e.target.elements.Contact.value;
     

     try {
      const response = await axios.post("http://localhost:3000/api/auth/user/login",{
        email: Email,
        password: Password,
        phone:Contact
        })
      setMessage(response.data.message || "User Login Successful")
      if(response.data.success){
      navigate("/")
      }
     }
      catch (error) {
        if(error.response && error.response.data.message){

          setMessage(error.response.data.message)
        }else{
setMessage("Something Went Wrong")
        }
     }
    }
  return(
  <div className="auth-page">
    <div className="card">
      <h2 className="title">User Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="Email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" name="Password" placeholder="Enter your password" />
        <label>Contact</label>
        <input type="contact" name="Contact" placeholder="Enter your Contact Number" />
        <button className="btn" type="submit">Login</button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  </div>
)};

export default UserLogin;