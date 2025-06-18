import React from "react";
import { Box, Typography } from "@mui/material";

const searchpage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "2.5rem",
          marginTop: "5rem",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "1.5rem" }}>
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
              width: 700,
              height: 300,
              border: "3px solid black",
            }}
          />

          <Box
            component="img"
            src="/madMax.webp"
            alt="mad max"
            sx={{
              width: 700,
              height: 300,
              border: "3px solid black",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default searchpage;
