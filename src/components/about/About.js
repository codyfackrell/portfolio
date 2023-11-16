import React from "react";
import Style from "./About.module.scss";
import { Box, Grid, Typography } from "@mui/material";
import { info } from "../../info/Info";

export default function About() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mx={{ xs: "3rem", md: "10rem" }}
      minHeight={"100vh"}
    >
      <h3>About Me</h3>
      <p>{info.bio}</p>
      <br></br>
      <h3>Skills</h3>
      <Box>
        <Grid
          container
          rowSpacing={4}
          display={'flex'}
          justifyContent={'center'}
        >
          {info.skills.map((skill) => (
            <Grid item container justifyContent={"center"} xs={6} md={2} >
              <img src={skill.link} alt={skill.name} key={skill.name}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
