/* eslint-disable react/jsx-props-no-spreading */
import { Container, TextField, ButtonGroup, Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import React, { useState } from "react";

const HomeEditor: React.FC = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [date, setDate] = useState(null);

  return (
    <Container>
      <TextField
        autoFocus
        fullWidth
        variant="standard"
        type="text"
        label="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="Начало марафона"
          inputFormat="MM/dd/yyyy"
          value={date}
          onChange={setDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Вернуться</Button>
        <Button>Сохранить</Button>
      </ButtonGroup>
    </Container>
  );
};

export default HomeEditor;
