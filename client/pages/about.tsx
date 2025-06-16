import { Box, Typography, Card, Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const about = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "47px",
          }}
        >
          Welcome to The Treasure Trove!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3rem",
          gap: "5rem",
        }}
      >
        <Box>
          <Typography
            sx={{
              marginLeft: "5rem",
              marginTop: "3rem",
              fontSize: "20px",
              whiteSpace: "normal",
              textIndent: "2rem",
            }}
          >
            The Treasure Trove is your one stop shop for all the best in movie
            entertainment. Please take a moment to browse through our amazing
            catalog! We invite you to browse, checkout and even add suggestions
            to this curated list of goodies :)
          </Typography>
        </Box>
        <Box
          component="img"
          src="/movieReel.avif"
          alt="Movie Reel"
          sx={{
            width: 350,
            height: "auto",
            marginTop: "-4rem",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly", // or "space-between" or "center"
          alignItems: "flex-start", // aligns cards at the top
          flexWrap: "wrap", // allows wrapping on smaller screens
          width: "50%",
          minHeight: 500,
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
          }}
        >
          <CardMedia
            sx={{ height: 450 }}
            image="/client/pages/movieReel.avif"
            title="My Best Friend's Wedding"
          />
        </Card>
        <Card
          sx={{
            maxWidth: 345,
          }}
        >
          <CardMedia
            sx={{ height: 450 }}
            image="/movieReel.avif"
            title="My Best Friend's Wedding"
          />
        </Card>
      </Box>
    </>
  );
};

export default about;
