import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1" component="h2" color="primary">
        Страница не найдена
      </Typography>
      <Button component={RouterLink} to="/">
        Вернуться на главную
      </Button>
    </Container>
  );
};

export default NotFound;
