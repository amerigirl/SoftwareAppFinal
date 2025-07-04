import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Typography, Stack, Chip } from "@mui/material";
import Link from 'next/Link';


const SuggestionForm = () => {
  const [form, setForm] = useState({
    title: "",
    year: "",
    genre: "",
    notes: "",
  });
  const [genreName, setGenreName] = useState("");
  const [genre, setGenres] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        const mGenres = data.map((movie) => movie.genre);
        //got rid of the multiple genres printing to view issue via using a set
        const uniqueGenres = [...new Set(mGenres)];
        setGenres(uniqueGenres);
        console.log(uniqueGenres);
      });
  }, []);

  // Handle input change on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Suggestion form submitted!`);
    setForm({ title: "", year: "", genre: "", notes: "" });
  };

  const handleGenreSubmit = (e) => {
    e.preventDefault();
    alert("Genre request submitted");
    setGenreName(""); //this will reset the box
  };

  return (
    <>
      <Link href="/about" passHref legacyBehavior>
        <Button
          component="a"
          sx={{
            fontWeight: "bold",
            margin: "2rem",
            marginLeft: "4rem",
            fontSize: "1rem",
          }}
        >
          Home
        </Button>
      </Link>
      <Box sx={{ marginTop: "4rem", textAlign: "center" }}>
        <Typography sx={{ fontSize: "2.5rem", color: "green" }}>
          Suggests, Suggestions, Suggestions!
        </Typography>
        <Typography sx={{ fontSize: "1.5rem", margin: "3rem", width: "80%" }}>
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

      <Box
        sx={{
          display: "flex",
          marginTop: "8rem",
          gap: "6rem",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginTop: "3rem",
            display: "grid",
            flexDirection: "column",
          }}
        >
          <Typography variant="div" sx={{ fontSize: "2.5rem", color: "red" }}>
            Want to add a WHOLE genre? OK!
          </Typography>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "6rem" }}>
        <Typography sx={{ fontSize: "1.5rem", margin: "2rem" }}>
          Suggest a new genre for our collection!
        </Typography>

        {/* Show existing genres */}
        <Typography sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
          Existing genres:
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
          sx={{ marginBottom: "2rem" }}
        >
          {genre.map((g) => (
            <Chip key={g} label={g} color="primary" />
          ))}
        </Stack>

        <Box
          component="form"
          onSubmit={handleGenreSubmit}
          sx={{
            display: "inline-flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            marginTop: "2rem",
            marginBottom: "5rem",
          }}
        >
          <TextField
            label="Genre Name"
            value={genreName}
            onChange={(e) => setGenreName(e.target.value)}
            required
          />
          <Button type="submit" variant="outlined">
            Submit Genre
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SuggestionForm;
