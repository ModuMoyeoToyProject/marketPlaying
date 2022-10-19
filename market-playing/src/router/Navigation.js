import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Chart from "../pages/Chart";
import Street from "../pages/Street";
import GameMain from "../pages/GameMain";
import PageList from "../pages/PageList";
import UserInfoTest from "../pages/UserInfoTest";
import "../styles/App.scss";

function Navigation() {
  return (
    <Router className="main">
      <Routes>
        <Route exact path="/" element={<PageList />} />
        <Route path="/lake" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/street" element={<Street />} />
        <Route path="/main" element={<GameMain />} />
        <Route path="/userInfoTest" element={<UserInfoTest />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
