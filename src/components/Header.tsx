import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import LogoDeskTop from "./Logo/LogoDeskTop";
import Account from "./Account";
import NavBarDeskTop from "./NavBar/NavBarDeskTop";
import NavBarMobile from "./NavBar/NavBarMobile";
import LogoMobile from "./Logo/LogoMobile";

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ mb: 5 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoDeskTop />
          <NavBarDeskTop />
          <NavBarMobile />
          <LogoMobile />
          <Account />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
