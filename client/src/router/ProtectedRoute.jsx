import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute() {
  if (!localStorage.getItem("accessToken")) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
