import React from "react";
import { Navigate } from "react-router-dom";
import isLogin from "./isLogin";

const PrivateRoute = ({ children }) => {
  console.log(sessionStorage.getItem("loginId"));
  return isLogin() ? children : <Navigate to="/" />;
};

export default PrivateRoute;
