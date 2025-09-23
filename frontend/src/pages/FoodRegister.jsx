import React from "react";
import "../styles/FoodPartnerRegister.css";

const FoodPartnerRegister = () => (
  <div className="auth-page">
    <div className="card">
      <h2 className="title">Food Partner Registration</h2>
      <form className="form">
        <label>Restaurant Name</label>
        <input type="text" placeholder="Enter restaurant name" />
        <label>Contact Name</label>
        <input type="text" placeholder="Enter contact name" />
        <label>Contact Number</label>
        <input type="tel" placeholder="Enter contact number" />
        <label>Address</label>
        <input type="text" placeholder="Enter address" />
        <label>Email</label>
        <input type="email" placeholder="Enter email" />
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
        <button className="btn" type="submit">Register</button>
      </form>
    </div>
  </div>
);

export default FoodPartnerRegister;