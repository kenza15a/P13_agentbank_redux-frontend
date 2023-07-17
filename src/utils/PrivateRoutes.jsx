import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  let isConnected =
    !!localStorage.getItem("user") || !!sessionStorage.getItem("user");
  return <>{isConnected ? <Outlet /> : <Navigate to="/login" />} </>;
}

export default PrivateRoutes;
