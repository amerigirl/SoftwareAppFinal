import { Box, Typography } from "@mui/material";

const about = () => {
  return (
    <>
          <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center", 
              marginTop: "3rem",
          }}>
              <Typography sx={{
                  fontWeight: "bold", 
                  fontSize: "x-large"
              }}>
                  Welcome to The Treasure Trove!
              </Typography>
      </Box>
    </>
  );
};

export default about;
