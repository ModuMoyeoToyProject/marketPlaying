import React, { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import isLogin from "./isLogin";

const PublicRoute = ({ children }) => {
  return isLogin() ? <Navigate to="/main" /> : children;
};

export default PublicRoute;
