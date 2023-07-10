import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
const interceptor = (token: String) => {
  axios.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};
const PrivateRoute = (props: any): JSX.Element => {
  const location = useLocation();
  if (!props.user.authenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  } else {
    interceptor(props.user.access_token);
    return <>{props.children}</>;
  }
};
const mapStatetoProps = (state: any) => ({
  user: state.auth,
});
export default connect(mapStatetoProps)(PrivateRoute);
