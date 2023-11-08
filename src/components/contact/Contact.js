import React from "react";
import { info } from "../../info/Info";
import { Box } from "@mui/material";
import SocialIcon from "../home/SocialIcon";

const Contact = () => {
  return (
    <Box width={'100%'} height={'100%'} display="flex" justifyContent="center" my='10rem'>
      <Box width={{xs: '75%', md: "125vh"}} height={{xs: '400px', md: '75vh'}} bgcolor="#d4eefc" borderRadius="32px" pt={"50px"}>
        <p>CONTACT ME</p>
        <p style={{ fontSize: "3rem", margin: "35px 0 75px 0" }}>
          I'd love to chat more!
        </p>
        <Box fontSize={{ xs: "2rem", md: "2rem" }} display="flex" justifyContent='center' alignItems="center">
          <i className="fa fa-envelope" />
          <p style={{ fontSize: "2rem", marginLeft: '15px'}}>{info.email}</p>
        </Box>
        <div>
          <Box
            display={"flex"}
            gap={"1.5rem"}
            fontSize={{ xs: "2rem", md: "2.5rem" }}
            alignItems={"center"}
            justifyContent={'center'}
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
            {/* <button>resume</button> */}
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default Contact;
