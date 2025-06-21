"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const SearchPage = () => {
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        //get titles
        const titles = data.map((movie) => movie.title);
        setMovieTitles(titles);
      
      }, []);
  });

  return (
    <>
      <Typography sx={{textAlign:"center", marginTop:"3rem", fontSize: "3rem"        
      }}>
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
          <Stack spacing={2} sx={{ width: 600, marginLeft: "3rem" , marginTop: "3rem"}}>
            <Autocomplete
              freeSolo
              // is this needed? --> id="free-solo-2-demo"
              disableClearable
              options={movieTitles}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search movie titles"
                  type="search"
                />
              )}
            />
          </Stack>
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
