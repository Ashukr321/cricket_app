import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import './App.css'
import Series from "./pages/series/Series";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Squad from "./pages/squad/Squad";
import Cricket from "./pages/cricket/Cricket";
import Players from "./pages/players/Players";
import Matches from "./pages/matches/Matches";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/players" element={<Players />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/squad" element={<Squad />} />
          <Route path="/series" element={<Series />} />
        </Routes>
        <Footer/>
      </Router>
    
    </Box>
  );
};

export default App;
