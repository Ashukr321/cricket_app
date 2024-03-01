import React, { useEffect } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import "./Hero.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "90vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2020/03/04/08/53/dominica-4900966_1280.jpg')",
          backgroundSize: "cover",
          filter: "blur(2px) brightness(0.3)",
          zIndex: -1,
        }}
      />
      <Stack
        sx={{
          marginTop: "1.5rem",
          padding: { xs: "15px", sm: "40px", md: "80px 40px" },
          position: "relative",
          zIndex: 1,
        }}
        justifyContent={"center"}
        data-aos="zoom-out-right"
        height={"100%"}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "white",
            fontWeight: "bold",
            lineHeight: "1.7",
            width: {
              xs: "100%",
              sm: "80%",
              md: "60%",
            },

            fontSize: { xs: "2rem", sm: "3rem" },
            padding: { xs: "20px 0", sm: "40px 0" },
            marginTop: "2rem",
            letterSpacing: ".1em",
          }}
        >
          <span className="hero_head">The Game of Cricket</span> <br />A digital
          platform for all cricket fans
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            width: {
              xs: "100%",
              sm: "80%",
              md: "60%",
            },
            lineHeight: "1.7",
            letterSpacing: ".1em",
          }}
        >
          The Game of Cricket is a timeless classic that has been loved by
          millions of people around the world. It’s not just about winning or
          losing; it’s about winning and losing.
        </Typography>
        <Stack
          gap={{ xs: 2, sm: 2 }}
          marginBottom={"1rem"}
          marginTop={{ xs: 4, sm: 4 }}
          flexDirection={{ xs: "row" }}
        >
          <Link to={"/cricket"}>
            <Button variant="contained" color="primary">
              Get Started
            </Button>
          </Link>

          <Link to={"/series"}>
            <Button variant="contained" color="primary">
              know more
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
