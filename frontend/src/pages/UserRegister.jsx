import React from "react";
import "../styles/UserRegister.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();

    const Name = e.target.elements.Name.value;
    const Contact = e.target.elements.Contact.value;
    const Address = e.target.elements.Address.value;
    const Email = e.target.elements.Email.value;
    const Password = e.target.elements.Password.value;


   await axios.post("http://localhost:3000/api/auth/user/register",{
      fullName:Name,
      email:Email,
      password: Password,
      phone:Contact,
      address:Address

    },{
      withCredentials:true //For generating cookies in application panel 
    })
    // console.log(response.data)
navigate("/")
    
  }
  return(
  <div className="auth-page">
    <div className="card">
      <h2 className="title">User Registration</h2>
      <form className="form" onSubmit={handleSubmit}>
       
        <label>Name</label>
        <input type="text" name="Name" placeholder="Enter your name" />
        
        <label>Contact Number</label>
        <input type="tel" name="Contact" placeholder="Enter your contact number" />
       
        <label>Address</label>
       <input type="text" name="Address" placeholder="Enter your address" />
       
        <label>Email</label>
        <input type="email" name="Email"  placeholder="Enter your email" />
        
        <label>Password</label>
        <input type="password" name="Password" placeholder="Enter your password" />
        
        <button className="btn" type="submit">Register</button>
      </form>
    </div>
  </div>
  )
};

export default UserRegister;