import React from "react";
import "../styles/UserLogin.css";

const UserLogin = () => (
  <div className="auth-page">
    <div className="card">
      <h2 className="title">User Login</h2>
      <form className="form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  </div>
);

export default UserLogin;