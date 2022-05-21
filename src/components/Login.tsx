import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { setItem } from "../utils/storage";

interface LoginProps {
  isOpen: boolean;
  setIsOpen: (flag: boolean) => void;
  setIsAuth: (flag: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ isOpen, setIsOpen, setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogin = () => {
    setIsOpen(false);
    setIsAuth(true);
    setItem("auth", "true");
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Вход</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleLogin}>Войти</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
