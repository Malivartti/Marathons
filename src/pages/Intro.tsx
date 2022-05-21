import { Container, Typography } from "@mui/material";
import React from "react";

const Intro: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" component="h1">
        Marathons - сервис для создания марафонов, отслеживания их прохождения и
        комментирования каждого его дня
      </Typography>
    </Container>
  );
};

export default Intro;
