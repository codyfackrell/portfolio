import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
            <h3>Portfolio</h3>
            <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} title={project.title} stack={project.stack} description={project.description} live={project.live} source={project.source}  />
                   </Grid>
                ))}
            </Grid>
            </Box>
        </Box>
    );
};