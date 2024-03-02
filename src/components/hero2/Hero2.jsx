import React, { useEffect } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Hero2 = () => {

  useEffect(()=>{
    Aos.init();
  })
  return (
    <Box>
      <Grid
        container
        gap={1}
        justifyContent={"space-between"}
        sx={{ padding: { xs: "15px", sm: "40px" } }}
      >
        <Grid item xs={12} sm={6}>
          <img
            style={{
              width: "100%",
              height: "100%",
              animation: "upAndDown 2s ease-in-out infinite alternate",
            }}
            src="https://img.freepik.com/free-vector/gradient-ipl-cricket-illustration_23-2149205212.jpg?t=st=1709280406~exp=1709284006~hmac=410b6915276e5f3e569065245fd8b5d20e75617e3154e07e80bf6e56290d6765&w=1380"
            alt="hero2_img"
          />
        </Grid>

        <Grid item xs={12} sm={5} sx={{ padding: "2rem 0" }} data-aos="zoom-in">
          <Typography
            variant="h3"
            sx={{
              lineHeight: "1.3",
              fontWeight: "bold",
              marginBottom: "1.2rem",
            }}
          >
            {/*  give tag line of the cricket india */}
            Welcome to <span className="hero2_span">Cricket India!</span> Join
            us and be a part of one of ourstriving teams.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: "1.5" }}>
            Explore cricket scores, player profiles, and match schedules on our
            user-friendly website. Enjoy real-time updates, intuitive
            navigation, and a seamless experience for cricket enthusiasts
            worldwide.
          </Typography>

          <Link to="/matches">
            <Button variant="contained" sx={{ marginTop: "1rem" }}>
              Explore
            </Button>
          </Link>
        </Grid>
      </Grid>
      {/* stylilng start ⭐⭐⭐⭐ */}
      <style>{`
        @keyframes upAndDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-10px);
          }
        }
        .hero2_span{
        background: linear-gradient(#27ae60,#e67e22);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }

      `}</style>

    </Box>
  );
};

export default Hero2;
