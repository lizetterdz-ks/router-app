import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, redirectTo }) => {
  const [isAuth] = useState(localStorage.getItem('authorized') === '1');

  return (
    isAuth ? children : 
    <Navigate to={redirectTo} />)
};
