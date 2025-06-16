import { Box, Typography } from "@mui/material";

const about = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "x-large",
          }}
        >
          Welcome to The Treasure Trove!
        </Typography>
      </Box>
      <Box>
        <Box  
          sx={{
            display: "flex"
            
          }}
        >
          <Typography
            sx={{
                
              marginLeft: "5rem",
              marginTop: "3rem",
            }}
          >
            The Treasure Trove is your one stop shop for all the best in movie
            entertainment!
          </Typography>
        </Box>
        <Box
          component="img"
          src="/movieReel.avif"
          alt="Description"
          sx={{
            width: 300,
            height: "auto",
            borderRadius: 2,
          }}
        />
      </Box>
    </>
  );
};

export default about;
