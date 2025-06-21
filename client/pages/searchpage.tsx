"use client";

import React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardActions,
  Button,
  CardContent,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const SearchPage = () => {
  const [movieTitles, setMovieTitles] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        //get titles
        const titles = data.map((movie) => movie.title);
        setMovieTitles(titles);
      });
  }, []);

  const handleSelect = (e, value) => {
    if (value) {
      fetch(
        //gets the title selected
        `http://127.0.0.1:8080/api/movies?title=${encodeURIComponent(value)}`
      )
        .then((response) => response.json())
        .then((data) => setSelectedMovie(data[0]));
    } else {
      //or resets back to null
      setSelectedMovie(null);
    }
  };
  return (
    <>
      <Typography
        sx={{ textAlign: "center", marginTop: "3rem", fontSize: "3rem" }}
      >
        Find your perfect movie tonight!
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "7rem",
          marginTop: "9rem",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "1.5rem", marginTop: "4rem" }}>
            Your movie awaits! Start typing in the search bar to get started!
          </Typography>
          <Stack
            spacing={2}
            sx={{ width: 600, marginLeft: "3rem", marginTop: "3rem" }}
          >
            <Autocomplete
              freeSolo
              disableClearable
              options={movieTitles}
              onChange={handleSelect}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search movie titles"
                  type="search"
                />
              )}
            />
          </Stack>
          {selectedMovie && (
            <Box>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 240 }}
                  title={selectedMovie.title}
                  image={selectedMovie.imageUrl || "/placeholder.jpg"}
                />

                <CardContent>
                  <Typography variant="h5">{selectedMovie.title}</Typography>
                  <Typography color="text.secondary">
                    {selectedMovie.year}
                  </Typography>
                  <Typography sx={{ marginBottom: 1.5 }}>
                    {selectedMovie.genre}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="medium" component="a">
                    Checkout
                  </Button>
                </CardActions>
              </Card>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: "2rem",
          }}
        >
          <Box
            component="img"
            src="/fantasyMovies.avif"
            alt="random movie poster"
            sx={{
              width: 600,
              height: 300,
              border: "3px solid black",
              objectFit: "fill",
            }}
          />

          <Box
            component="img"
            src="/madMax.webp"
            alt="mad max"
            sx={{
              width: 600,
              height: 300,
              border: "3px solid black",
              objectFit: "fill",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default SearchPage;
