import React from "react";
import { Fitbit } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@mui/material";

const LogoDeskTop = () => {
  return (
    <>
      <Fitbit sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component={RouterLink}
        to="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
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

export default LogoDeskTop;
