import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const SuggestionForm = () => {
  const [form, setForm] = useState({
    title: "",
    year: "",
    genre: "",
    notes: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Form submitted!`);
    setForm({ title: "", year: "", genre: "", notes: "" });
  };

  return (
    <>
      <Box sx={{ marginTop: "4rem", textAlign: "center" }}>
        <Typography sx={{ fontSize: "2.5rem" }}>
          Suggest an Awesome Movie!
        </Typography>
       <Typography sx={{ fontSize: "1.5rem", margin:"3rem", width: "80%" }}>
          See a great movie that is not on the list? Take a moment to fill out
          our handy-dandy suggestion form! An associate will check it for
          awesomeness and, if it passes, add it to the list!
        </Typography>  
      </Box>

      
       


      <Box
        sx={{
          display: "flex",
          marginTop: "8rem",
          gap: "6rem",
          justifyContent: "center",
          marginRight: "8rem",
        }}
      >
        <Box
          component="img"
          src="/questionMark.jpg"
          alt="Question Mark Man"
          sx={{ width: 300, height: 400, marginLeft: "5rem" }}
        />
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 400,
          }}
        >
          <TextField
            label="Movie Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <TextField
            label="Year"
            name="year"
            value={form.year}
            onChange={handleChange}
            type="number"
          />
          <TextField
            label="Genre"
            name="genre"
            value={form.genre}
            onChange={handleChange}
          />
          <TextField
            label="Why is this movie awesome?!"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            multiline
            rows={4}
          />
          <Button type="submit" variant="outlined">
            Submit Suggestion
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SuggestionForm;
