import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import ReactPlayer from "react-player";

const Features = () => {
  const videoUrl =
    "https://cdn.pixabay.com/vimeo/886596453/stadium-189845.mp4?width=1280&hash=0332fefbe759170c024770e79e08e94500de9fea";

  return (
    <Box position="relative">
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="50%" // Use viewport height for responsive height
        loop={true}
        playing={true}
      />

      <Stack
        sx={{
          position: "absolute",
          top: "20%",
          left: "20px",
          maxWidth: {
            xs: "80%",
            sm: "60%",
            md: "40%",
          },
          color: "white", // Set text color to white
        }}
      >
        <Typography variant="body1">
          Explore the latest features in our cricket world. This video showcases exciting moments, interviews, and analysis from the stadium.
        </Typography>
        
      </Stack>
    </Box>
  );
};

export default Features;
