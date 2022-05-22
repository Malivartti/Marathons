import React from "react";
import { Container, Grid, Paper, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import diary from "../store/diary";

const namesOfDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

const Diary: React.FC = () => {
  const navigate = useNavigate();

  const toDay = (day: number) => {
    navigate(`${day}`);
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" textAlign="center" sx={{ mb: 5 }}>
        Дни
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          display: { lg: "flex", md: "none", sm: "none", xs: "none" },
          mb: 5,
        }}
      >
        {namesOfDays.map((name, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid key={index} item>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 140,
                height: 30,
                backgroundColor: "#fff",
              }}
            >
              {name}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 140,
              height: 140,
              backgroundColor: "#fff",
            }}
          >
            <Button variant="text" sx={{ width: "100%", height: "100%" }}>
              <AddIcon />
            </Button>
          </Paper>
        </Grid>
        {diary.days.map((day) => (
          <Grid key={day.id} item onClick={() => toDay(day.day)}>
            <Paper
              elevation={5}
              sx={{
                width: 140,
                height: 140,
                backgroundColor: "#fff",
              }}
            >
              <Box
                sx={{ width: "100%", height: "10%", backgroundColor: "white" }}
              />
              <Button variant="text" sx={{ width: "100%", height: "90%" }}>
                День {day.day}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Diary;
