import { Container, Grid, Paper, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import marathons from "../store/marathons";

const Marathons: React.FC = observer(() => {
  return (
    <Container>
      <Typography variant="h4" component="h2">
        Текущие марафоны:
      </Typography>
      <Grid container spacing={5}>
        {marathons.marathons.map((marathon) => (
          <Grid item key={marathon.id}>
            <Paper variant="outlined">{marathon.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
});

export default Marathons;
