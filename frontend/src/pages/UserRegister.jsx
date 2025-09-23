import React from "react";
import "../styles/UserRegister.css";

const UserRegister = () => (
  <div className="auth-page">
    <div className="card">
      <h2 className="title">User Registration</h2>
      <form className="form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />
        <label>Contact Number</label>
        <input type="tel" placeholder="Enter your contact number" />
        <label>Address</label>
        <input type="text" placeholder="Enter your address" />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="btn" type="submit">Register</button>
      </form>
    </div>
  </div>
);

export default UserRegister;