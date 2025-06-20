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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send form data to your backend
    alert(`Suggested: ${form.title} (${form.year}) - ${form.genre}`);
    setForm({ title: "", year: "", genre: "", notes: "" });
  };

  return (
    <>
          <Box sx={{ display: "flex" }}>
              <Box>
                  
              </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 400,
            mx: "auto",
            mt: 6,
          }}
        >
          <Typography variant="h5" align="center">
            Suggest a Movie
          </Typography>
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
            label="Why do you recommend it?"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            multiline
            rows={3}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Suggestion
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SuggestionForm;
