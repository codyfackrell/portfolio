import React, { useEffect, useState } from "react";
import Style from "./App.module.scss";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import { Box } from "@mui/material";

function App() {
  let [darkMode, setDarkMode] = useState(false);

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    console.log(oppositeOfCurrentDarkMode);
    localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    let detectedDarkMode = eval(localStorage.getItem("darkMode"));

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Navbar darkMode={darkMode} handleTheme={handleToggleDarkMode} />
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
