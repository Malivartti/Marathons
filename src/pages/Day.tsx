import React from "react";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import diary from "../store/diary";

const Day = () => {
  const dayId = Number(useParams().id);
  const dayValues = diary.days.find((day) => day.id === dayId);

  return (
    <Container>
      <Typography variant="h4" component="h2" textAlign="center" sx={{ mb: 5 }}>
        День {dayId}: {dayValues?.title}
      </Typography>
    </Container>
  );
};

export default Day;
