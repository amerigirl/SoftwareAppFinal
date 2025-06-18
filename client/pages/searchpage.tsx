import React from 'react'
import { Box, Typography } from '@mui/material'

const searchpage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem",
        gap: "2rem",
      }}
    >
      <Typography sx={{ fontSize: "1.5rem" }}>
        Your movie awaits! Start typing in the search bar to get started!
      </Typography>

      <Box
        component="img"
        src="/fantasyMovies.avif"
        alt="random movie poster"
        sx={{
          width: 700,
          height: 300,
          objectFit: "cover",
        }}
      />
    </Box>
       <Box
       component="img"
       src="/madMax.webp"
       alt="mad max"
       sx={{
         width: 700,
         height: 300,
         objectFit: "cover",
       }}
     />
   </Box>
  );
}

export default searchpage
