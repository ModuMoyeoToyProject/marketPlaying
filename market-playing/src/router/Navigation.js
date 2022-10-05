import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Chart from "../pages/Chart";
import UserInfoTest from "../pages/UserInfoTest";   
import "../styles/App.scss";

function Navigation() {
  return (
    <Router className="main">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/userInfoTest" element={<UserInfoTest />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
