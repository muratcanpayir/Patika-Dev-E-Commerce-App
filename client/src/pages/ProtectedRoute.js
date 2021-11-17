import React from "react";
import { useAuth } from "../context/AuthContext";
import Profile from "./Profile";
import { Navigate } from "react-router-dom";

function ProtectedRoute() {
  const { loggedIn } = useAuth();
  return loggedIn ? <Profile /> : <Navigate to="/" />;
}

export default ProtectedRoute;
