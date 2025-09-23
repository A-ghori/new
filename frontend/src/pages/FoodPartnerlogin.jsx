import React from "react";
import "../styles/FoodPartnerLogin.css";

const FoodPartnerLogin = () => (
  <div className="auth-page">
    <div className="card">
      <h2 className="title">Food Partner Login</h2>
      <form className="form">
        <label>Email</label>
        <input type="email" placeholder="Enter email" />
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  </div>
);

export default FoodPartnerLogin;