import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Inventory from "../pages/Inventory";
import Chart from "../pages/Chart";
import Street from "../pages/Street";
import GameMain from "../pages/GameMain";
import PageList from "../pages/PageList";
import UserInfoTest from "../pages/UserInfoTest";
import Status from "../pages/Status";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Modu from "../pages/Main";
import Attack from "../pages/Attack";
import Loading from "../pages/Loading";
import "../styles/App.css";

import { ErrorHandler } from "../react-query/queryClient";
import PublicRoute from "./lib/PublicRoute";
import PrivateRoute from "./lib/PrivateRoute";

function Navigation() {
  const { queryClient } = ErrorHandler();

  return (
    <QueryClientProvider client={queryClient}>
      <Router className="main">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PublicRoute>
                <PageList />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/join"
            element={
              <PublicRoute>
                <Join />
              </PublicRoute>
            }
          />
          <Route
            path="/modu"
            element={
              <PublicRoute>
                <Modu />
              </PublicRoute>
            }
          />
          <Route
            path="/modu2"
            element={
              <PublicRoute>
                <Modu />
              </PublicRoute>
            }
          />
          <Route
            path="/lake"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/shop"
            element={
              <PublicRoute>
                <Shop />
              </PublicRoute>
            }
          />
          <Route
            path="/status"
            element={
              <PublicRoute>
                <Status />
              </PublicRoute>
            }
          />
          <Route
            path="/inventory"
            element={
              <PublicRoute>
                <Inventory />
              </PublicRoute>
            }
          />
          <Route
            path="/chart"
            element={
              <PublicRoute>
                <Chart />
              </PublicRoute>
            }
          />
          <Route
            path="/street"
            element={
              <PublicRoute>
                <Street />
              </PublicRoute>
            }
          />
          <Route
            path="/main"
            element={
              <PublicRoute>
                <GameMain />
              </PublicRoute>
            }
          />
          <Route
            path="/userInfoTest"
            element={
              <PublicRoute>
                <UserInfoTest />
              </PublicRoute>
            }
          />
          <Route
            path="/attack"
            element={
              <PublicRoute>
                <Attack />
              </PublicRoute>
            }
          />
        </Routes>
      </Router>
      <Loading />
    </QueryClientProvider>
  );
}

export default Navigation;
