import React from "react";
import Style from "./About.module.scss";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function About() {
  return (
    <Box
      id="about"
      display={"flex"}
      flexDirection={"column"}
      gap={5}
      alignItems={"center"}
      mx={{ xs: "3rem", md: "12rem" }}
      py={10}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxWidth={{md: '80%'}}
        bgcolor="#d4eefc"
        borderRadius="32px"
        p={"25px"}
      >
        <h3>About Me</h3>
        <p>{info.bio}</p>
      </Box>
      <br></br>
      <h3>Skills</h3>
      <Box>
        <Grid
          container
          rowSpacing={4}
          display={"flex"}
          justifyContent={"center"}
        >
          {info.skills.map((skill) => (
            <Grid item container justifyContent={"center"} xs={6} md={2}>
              <img src={skill.link} alt={skill.name} key={skill.name} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
