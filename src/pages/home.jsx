import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Grid, Typography, Box, Paper, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";
import Banner from "../assets/Banner.png"

// Custom styles for Tiles
const Tile = styled(Paper)(({ theme }) => ({
  backgroundColor: "#0f1a4a", // Navy Blue
  color: "#FFD700", // Gold
  textAlign: "center",
  padding: theme.spacing(3),
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Default shadow
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px) scale(1.05)", // Hover effect
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.4)",
  },
}));

// Banner container with background image
const Banner = styled(Box)({
    background: "url('../assets/Banner.png') center/cover no-repeat",
    color: "#fff",
    textAlign: "center",
    padding: "170px 0", // Adjust padding as needed
    fontSize: "2.3rem", // Font size adjustment for large screens
    fontWeight: "bold",
    //boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Optional shadow for depth
    position: "relative",
    "@media (max-width: 600px)": {
      fontSize: "1.5rem", // Adjust font size for mobile screens
      padding: "60px 0",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.5)", // Optional semi-transparent overlay for the banner image
      zIndex: -1,
    },
  });

// Page background style
const Background = styled(Box)({
  background: "linear-gradient(to bottom, #ffffff, #ffffff)", // Light gradient background
  minHeight: "100vh",
  padding: "20px 0",
});

// Tile data
const tiles = [
  { id: 1, title: "Profile (coming soon)", icon: "icon_contact.png", link: "/profile" },
  { id: 2, title: "Events", icon: "icon_event.png", link: "/events" },
  { id: 3, title: "FAQ", icon: "icon_faq.png", link: "/faq" },
  { id: 4, title: "Settings (coming soon)", icon: "icon_settings.png", link: "/settings" },
  { id: 5, title: "Quick Poll (coming soon)", icon: "icon_quick polls.png", link: "/quickpolls" },
  { id: 6, title: "Support (coming soon)", icon: "icon_email.png", link: "/support" },
];

function Home() {
  const { user } = useContext(UserContext);
  console.log(user)

  return (
    <Background>
      <Banner />

      {/* Welcome Text */}
      <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
  <Typography
    variant="h3"
    sx={{
      color: "#FFD700", // Gold color for contrast
      fontWeight: "bold", // Bold for emphasis
      fontSize: "3rem", // Bigger font size
      letterSpacing: "2px", // Slightly increase letter spacing for elegance
      textShadow: "2px 2px 4px #001f3f", // Subtle shadow for depth
      "@media (max-width: 600px)": {
        fontSize: "2rem", // Smaller font size for mobile devices
      },
    }}
  >
    Hello, {user.username}!
  </Typography>
</Box>

      {/* Animated Tiles */}
      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <Grid container spacing={4} justifyContent="center">
          {tiles.map((tile) => (
            <Grid item xs={12} sm={6} md={4} key={tile.id}>
              <Link to={tile.link} style={{ textDecoration: "none" }}>
                <Tile>
                  <CardMedia
                    component="img"
                    image={`../../public/${tile.icon}`}
                    alt={tile.title}
                    sx={{
                      width: "60px",
                      margin: "0 auto 15px",
                    }}
                  />
                  <Typography variant="h6">{tile.title}</Typography>
                </Tile>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Background>
  );
}

export default Home;
