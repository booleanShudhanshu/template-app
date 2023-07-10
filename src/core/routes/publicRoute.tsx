import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = (props: any): JSX.Element => {
  const location = useLocation();
  const isAuthenticated = useSelector((state: any) => state.auth.authenticated);
  const auth = useSelector((state: any) => state.auth);
  if (isAuthenticated) {
    return <Navigate to={"/"} state={{ from: location }} />;
  }

  return props.children;
};
export default PublicRoute;
