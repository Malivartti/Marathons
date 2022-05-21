import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import { setItem } from "../utils/storage";

interface RegistrationProps {
  isOpen: boolean;
  setIsOpen: (flag: boolean) => void;
  setIsAuth: (flag: boolean) => void;
}

const Registration: React.FC<RegistrationProps> = ({
  isOpen,
  setIsOpen,
  setIsAuth,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReg = () => {
    handleClose();
    setIsAuth(true);
    setItem("auth", "true");
    const accValues = {
      name,
      email,
      password,
    };
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Регистрация</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Имя"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          id="password"
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
        <Button onClick={handleReg}>Зарегистрироваться</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Registration;
