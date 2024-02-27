import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <Box>
      <Router>
      <Navbar/>
        <Routes>
          <Route  />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
