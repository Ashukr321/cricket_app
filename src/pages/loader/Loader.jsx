import React from "react";
import { Box } from "@mui/material";
import "./Loader.css";
const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="loader"></div>
    </Box>
  );
};

export default Loader;
