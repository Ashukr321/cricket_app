import React, { useEffect } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import "./Hero.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <Box className="hero" minHeight={"100vh"}  >
      <Stack
        sx={{
          marginTop:"1.5rem",
          padding: { xs: "0px 40px", sm: "150px 40px" },
          position: "absolute",
          height:"100%"
        }}
        justifyContent={"center"}
        data-aos="zoom-out-right"
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: "uppercase",
            color: "white",
            fontWeight: "bold",
            lineHeight: "1.7",
            width: {
              xs: "100%",
              sm: "70%",
            },
          }}
        >
          {/* Add some heading related to the cricket tag line */}
          <span>The Game of Cricket</span> <br />A digital platform for all
          cricket fans
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            width: {
              xs: "100%",
              sm: "70%",
            },
            lineHeight: "1.5",
          }}
        >
          The Game of Cricket is a timeless classic that has been loved by
          millions of people around the world. It’s not just about winning or
          losing; it’s about winning and losing.
        </Typography>
        <Stack gap={2} marginTop={4} flexDirection={"row"}>
          <Button variant="contained" color="primary">
            Get Started
          </Button>

          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
