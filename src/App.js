import React from "react";
import Style from "./App.module.scss";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Box component={"footer"} py={"1.5rem"} sx={{ opacity: 0.7 }}>
        <p>codyfackrell, 2024</p>
      </Box>
    </Box>
  );
}

export default App;
