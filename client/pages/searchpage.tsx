
"use client"

import React from "react";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const SearchPage = () => {
const [movieTitles, setMovieTitles] = useState([])
const [isLoading, setIsLoading] = useState(true)

  
  useEffect(() => { 
    fetch(" http://127.0.0.1:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        //get titles
        const titles = data.map((movie) => movie.title);
        setMovieTitles(titles);
        setIsLoading(false);
      }, []);
  })
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "2.5rem",
          marginTop: "10rem",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "1.5rem", marginTop: "4rem" }}>
          Your movie awaits! Start typing in the search bar to get started!
        </Typography>
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
      <Stack spacing={2} sx={{ width: 300 }}>
     
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={movieTitles.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              slotProps={{
                input: {
                  ...params.InputProps,
                  type: "search",
                },
              }}
            />
          )}
        />
      </Stack>
    </>
  );
};

export default SearchPage;
