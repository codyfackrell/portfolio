import React from "react";
import Style from "./About.module.scss";
import { Box, Grid, Typography } from "@mui/material";
import { info } from "../../info/Info";

export default function About() {
  const firstName = info.firstName.toLowerCase();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      my={"5rem"}
    >
      <h2>About Me</h2>
      <Typography variant="h6" align="center" paragraph>
        This will be a paragraph about me. I can include infromation about my
        coding journey and mental health profession. I can also include
        infromation about my hobbies and family.
      </Typography>
      <br></br>
      <h2>Skills</h2>
      <Box>
        <Grid container rowSpacing={5} columnSpacing={2} display={'flex'} justifyContent={'center'}>
          {info.skills.map((skill) => (
            <Grid item container justifyContent={"center"} xs={6} md={2} >
              <img src={skill.link} alt={skill.name} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
