import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const pages = [
  { name: "Главная", to: "home" },
  { name: "Дневник", to: "diary" },
  { name: "#1", to: "diary/1" },
];

const NavBarDeskTop = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Typography
          key={page.name}
          textAlign="center"
          variant="h6"
          component={RouterLink}
          to={page.to}
          sx={{ color: "inherit", textDecoration: "none", mr: 2 }}
        >
          {page.name}
        </Typography>
      ))}
    </Box>
  );
};

export default NavBarDeskTop;
