import React from "react";
import "../styles/FoodPartnerRegister.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FoodPartnerRegister = () => {
  const [message,setMessage] = useState()
const navigate = useNavigate()

const handleSubmit = async (e) => {
e.preventDefault();

const Name = e.target.elements.Name.value;
const Contact = e.target.elements.Contact.value;
const Resturant = e.target.elements.Resturant.value;
const Address = e.target.elements.Address.value;
const Email = e.target.elements.Email.value;
const Password = e.target.elements.Password.value;

try {
  const response = await axios.post("http://localhost:3000/api/auth/partner/register",{
    name: Name,
    email:Email,
    password: Password,
    phone: Contact,
    resturant: Resturant,
    address: Address
  },{
  withCredentials:true
  })
  // Show Success Message
  setMessage(response.data.message || "Food Partner Register Successfully")
  if(response.data.success){
    navigate("/resturant")
  }
} catch (error) {
  if(error.response && error.response.data.message){
    setMessage(error.response.data.message)
  }else{
    setMessage("Something went wrong try again later ")
  }
}


}
return(
  <div className="auth-page">
    <div className="card">
      <h2 className="title">Food Partner Registration</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Resturant Name</label>
        <input type="text" name="Resturant" placeholder="Enter resturant name" />
        <label>Contact Name</label>
        <input type="text" name="Name" placeholder="Enter contact name" />
        <label>Contact Number</label>
        <input type="tel" name="Contact" placeholder="Enter contact number" />
        <label>Address</label>
        <input type="text" name="Address" placeholder="Enter address" />
        <label>Email</label>
        <input type="email" name="Email" placeholder="Enter email" />
        <label>Password</label>
        <input type="password" name="Password" placeholder="Enter password" />
        <button className="btn" type="submit">Register</button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  </div>
)};

export default FoodPartnerRegister;