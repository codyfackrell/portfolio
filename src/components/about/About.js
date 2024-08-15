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
      alignItems={"center"}
      mx={{ xs: "3rem", md: "10rem" }}
      minHeight={"100vh"} 
    >
            <Box width={{xs: '75%', md: "80%"}} height={{xs: '400px', md: '100%'}} bgcolor="#d4eefc" borderRadius="32px" pt={"50px"}>

      <h3>About Me</h3>
      <p>{info.bio}</p>
      </Box>
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
