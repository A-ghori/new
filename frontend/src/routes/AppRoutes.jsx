import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import UserRegister from "../pages/UserRegister"
import UserLogin from "../pages/UserLogin"
import FoodPartnerRegister from "../pages/FoodRegister"
import FoodPartnerLogin from "../pages/FoodPartnerlogin"
import Home from '../general/Home'
import Resturant from '../general/Resturant'
import Profile from '../food-partner/profile'
import CreateFood from '../food-partner/CreateFood'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
        <Route path="/" element={<Home/>} />
        <Route path="/resturant" element={<Resturant/>} />
       <Route path="/food-partner/:id" element={<Profile/>} />
       <Route path="/create-food" element={<CreateFood/>} />
      </Routes>
    </Router>
  )
}

export default AppRoutes