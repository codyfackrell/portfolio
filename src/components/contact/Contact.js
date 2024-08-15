import React from "react";
import { info } from "../../info/Info";
import { Box } from "@mui/material";
import SocialIcon from "../home/SocialIcon";

const Contact = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display="flex"
      justifyContent="center"
      my="10rem"
    >
      <Box
        width={{ xs: "75%", md: "800px" }}
        height={{ xs: "400px", md: "450px" }}
        bgcolor="#d4eefc"
        borderRadius="32px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <p>CONTACT ME</p>
        <p style={{ fontSize: "3rem", margin: "35px 0 50px 0" }}>
          I'd love to chat more!
        </p>
        <Box
          fontSize="2rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <a href="mailto:cody.j.fackrell@gmail.com">
            <i className="fa fa-envelope" />
            <Box
              sx={{
                fontSize: "2rem",
                marginLeft: "15px",
                display: { xs: "none", md: "inline" },
              }}
            >
              {info.email}
            </Box>
          </a>
        </Box>

        <div>
          <Box
            display={"flex"}
            gap={"1.5rem"}
            fontSize={{ xs: "2rem", md: "2.5rem" }}
            alignItems={"center"}
            justifyContent={"center"}
            mt="50px"
          >
            {info.socials.map((social, index) => (
              <SocialIcon
                key={index}
                link={social.link}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default Contact;
