import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import "./styles.css";
function CustomErrorPage() {
  let location = useLocation();

  return (
    <div>
      <div className={"pageNotFound"}>
        <h1>404 Page not Found</h1>
        {/* <h3> Redirecting You in</h3> */}
      </div>
    </div>
  );
}

export default CustomErrorPage;
