import React from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Box} from "@mui/material";
import {info} from "../info/Info";
import {Link} from "react-scroll"

const links = [
    {
        name: info.initials,
        type: 'initials',
        to: 'about',
        active: 'home'
    },
    {
        name: 'About Me',
        to: 'about',
        active: 'about'
    },
    {
        name: 'Portfolio',
        to: 'portfolio',
        active: 'portfolio'
    }
]

export default function Navbar({darkMode, handleTheme}) {

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'} 
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} 
                         >
                        <li 
                        className={Style.link}
                        >
                            {!link.type && <Link to={link.to} smooth={true} duration={500} style={{padding: '0.5rem 0', cursor: 'pointer' }}>{link.name}</Link>}
                            {link.type && <Link to={link.to} smooth={true} duration={500} style={{cursor: 'pointer' }}><h1 style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'Advent Pro'}}>{'<'}<span style={{ background: 'none', WebkitBackgroundClip: 'initial', WebkitTextFillColor: 'initial', textTransform: 'uppercase' }}>{info.initials}</span>{'/>'}</h1></Link>}
                        </li>
                    </Box>
                ))}
{/* Dark Mode Toggler */}
                {/* <li>
                    <Toggler darkMode={darkMode} handleTheme={handleTheme}/>
                </li> */}
            </Box>
        </Box>
    )
}