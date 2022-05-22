/* eslint-disable react/jsx-props-no-spreading */
import { Container, TextField, ButtonGroup, Button, Box } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import React, { useState } from "react";
import marathons from "../store/marathons";

const HomeEditor: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [descr, setDescr] = useState<string>("");
  const [date, setDate] = useState<Date | null>(new Date());

  const handleSave = () => {
    marathons.addMarathon(title, descr, date);
  };

  return (
    <Container>
      <Box>
        <TextField
          autoFocus
          fullWidth
          variant="standard"
          type="text"
          label="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 5 }}
        />
        <TextField
          autoFocus
          fullWidth
          multiline
          rows={4}
          variant="standard"
          label="Описание"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
          sx={{ mb: 5 }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label="Начало марафона"
            inputFormat="dd/MM/yyyy"
            value={date}
            onChange={setDate}
            renderInput={(params) => (
              <TextField {...params} sx={{ width: "100%", mb: 5 }} />
            )}
          />
        </LocalizationProvider>
      </Box>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Вернуться</Button>
        <Button onClick={handleSave}>Сохранить</Button>
      </ButtonGroup>
    </Container>
  );
};

export default HomeEditor;
