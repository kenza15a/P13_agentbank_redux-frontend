import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  //const user = useSelector((state) => state.auth.user);
  //use the session storage pour chercher le token
  let isConnected =
    !!localStorage.getItem("user") || !!sessionStorage.getItem("user");
  return <>{isConnected ? <Outlet /> : <Navigate to="/sign-in" />} </>;
}

export default PrivateRoutes;
