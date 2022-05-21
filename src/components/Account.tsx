import React, { useContext, useState } from "react";
import {
  ButtonGroup,
  Button,
  Tooltip,
  IconButton,
  Avatar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Login from "./Login";
import Registration from "./Registration";
import AuthContext from "../context";
import { setItem } from "../utils/storage";

const Account: React.FC = observer(() => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [loginIsOpen, setIsLoginOpen] = useState(false);
  const [regIsOpen, setRegIsOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleOpenReg = () => {
    setRegIsOpen(true);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    handleCloseUserMenu();
    setIsAuth(false);
    setItem("auth", "false");
  };

  return !isAuth ? (
    <>
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        color="inherit"
      >
        <Button onClick={handleOpenLogin}>Войти</Button>
        <Button onClick={handleOpenReg}>Регистрация</Button>
      </ButtonGroup>
      <Login
        isOpen={loginIsOpen}
        setIsOpen={setIsLoginOpen}
        setIsAuth={setIsAuth}
      />
      <Registration
        isOpen={regIsOpen}
        setIsOpen={setRegIsOpen}
        setIsAuth={setIsAuth}
      />
    </>
  ) : (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ color: "white", mr: 1 }}
          >
            Name
          </Typography> */}
          <Avatar
            alt="Remy Sharp"
            src="https://i.stack.imgur.com/wcRRv.jpg?s=328&g=1"
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography
            textAlign="center"
            component={RouterLink}
            to="profile"
            sx={{ color: "inherit", textDecoration: "none" }}
          >
            Профиль
          </Typography>
        </MenuItem>
        <MenuItem onClick={logout}>
          <Typography textAlign="center">Выйти</Typography>
        </MenuItem>
      </Menu>
    </>
  );
});

export default Account;
