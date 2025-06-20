import { Box, Typography, Card, Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";

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
          textAlign: "center",
          justifyContent: "center",
          gap: "6rem",
          marginTop: "1rem",
        }}
      >
        <Card sx={{ maxWidth:400 }}>
          <CardMedia
            component="img"
            sx={{ maxHeight: 345, objectFit:"contain"}}
            image="/myBFWedding.jpg"
            title="My Best Friend's Wedding"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Search our list of AWESOME movies :)
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="/searchpage" passHref legacyBehavior>
              <Button size="medium" component="a">
                Search our collection
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 350 }}
            image="/questionMark.jpg"
            title="Question Mark Man"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              We are always looking for additions to the Trove!
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="/suggest" passHref legacyBehavior>
              <Button size="medium" component="a">Suggest a Movie</Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default about;
