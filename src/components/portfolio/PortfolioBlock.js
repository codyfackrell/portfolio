import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, title, stack, description, live, source} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} minWidth={'80%'}/>
         <h4>{title}</h4>
         <Box maxWidth={"60%"} >
         <p style={{fontSize: '0.8rem', margin: '5px 0'}}>{stack}</p>
         <p>{description}</p>
         </Box>
         <Box className={'portfolio'} display={'flex'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1rem'} pt={'1rem'} pb={'2rem'}>
            <Box p={1} border={'1.5px solid black'} borderRadius={'10px'}>
               <IconLink link={live} title={'Demo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'1.5px solid black'} borderRadius={'10px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;