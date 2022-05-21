import React from "react";
import { Fitbit } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@mui/material";

const LogoMobile = () => {
  return (
    <>
      <Fitbit sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component={RouterLink}
        to="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Marathons
      </Typography>
    </>
  );
};

export default LogoMobile;
