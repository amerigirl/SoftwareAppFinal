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
      [e.target.name]: e.target.value 
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
      </Box>
      <Box sx={{ display: "flex", marginTop: "3rem" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 400,
            mx: "auto",
         
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
