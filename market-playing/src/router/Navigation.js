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
import Loading from "../pages/Loading";
import "../styles/App.scss";

import { ErrorHandler } from "../react-query/queryClient";
import PrivateRoute from "./lib/PrivateRoute";
import PublicRoute from "./lib/PublicRoute";

function Navigation() {
  const { BackendErrorImportError, queryClient } = ErrorHandler();
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
            path="/lake"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/shop"
            element={
              <PrivateRoute>
                <Shop />
              </PrivateRoute>
            }
          />
          <Route
            path="/status"
            element={
              <PrivateRoute>
                <Status />
              </PrivateRoute>
            }
          />
          <Route
            path="/inventory"
            element={
              <PrivateRoute>
                <Inventory />
              </PrivateRoute>
            }
          />
          <Route
            path="/chart"
            element={
              <PrivateRoute>
                <Chart />
              </PrivateRoute>
            }
          />
          <Route
            path="/street"
            element={
              <PrivateRoute>
                <Street />
              </PrivateRoute>
            }
          />
          <Route
            path="/main"
            element={
              <PrivateRoute>
                <GameMain />
              </PrivateRoute>
            }
          />
          <Route
            path="/userInfoTest"
            element={
              <PrivateRoute>
                <UserInfoTest />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
      <Loading />
    </QueryClientProvider>
  );
}

export default Navigation;
