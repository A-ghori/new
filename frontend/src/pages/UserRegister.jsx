import React from "react";
import "../styles/UserRegister.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const UserRegister = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const handleSubmit = async (e) =>{
    e.preventDefault();

    const Name = e.target.elements.Name.value;
    const Contact = e.target.elements.Contact.value;
    const Address = e.target.elements.Address.value;
    const Email = e.target.elements.Email.value;
    const Password = e.target.elements.Password.value;

try {
  const response = await axios.post("http://localhost:3000/api/auth/user/register",{
      fullName:Name,
      email:Email,
      password: Password,
      phone:Contact,
      address:Address

    },{
      withCredentials:true //For generating cookies in application panel 
    })
    // Show success message
setMessage(response.data.message || "Registration Successful" )
if(response.data.success){      
    navigate("/home")
    
  } 
}
  catch (error) {
    // Optionally handle error, e.g. setMessage(error.response?.data?.message || "Registration failed");

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
      <h2 className="title">User Registration</h2>
      {message && <div className="message">{message}</div>}
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