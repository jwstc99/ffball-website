
import {React, useState} from "react";
import NavbarCSS from "./navbar.module.css";
import {BsChatLeftDots, BsTrophy, BsFillPersonFill} from "react-icons/bs";
import {IoStatsChartSharp} from "react-icons/io5"; 
import {FaFootballBall} from "react-icons/fa";
import Link from 'next/link';
import { Tooltip } from "@mui/material";

function Navbar(props) {
    return (
        <nav className={NavbarCSS.navbar}>
            <div className="NAVHEADER"></div>
            <ul className={NavbarCSS.navbarnav}>
                <NavItem icon= {<FaFootballBall />} link = "/" tt="Home" /> 
                <NavItem icon= {<BsFillPersonFill size={25}/>} link = "/profile" tt="Profile"/> 
                <NavItem icon= {<BsChatLeftDots />} link = "/chat" tt= "Messages"/>
                <NavItem icon= {<BsTrophy />} link = "/records" tt="Records" /> 
                <NavItem icon= {<IoStatsChartSharp />} link="/stats" tt="Stats"/> 
            </ul>
        </nav>
    );
}

function NavItem(props) {
    return (
        <li className={NavbarCSS.navitem}>
            <Link href={props.link}>
                <a className={NavbarCSS.iconbutton} >
                    {props.icon}
                </a>
            </Link>
            
        </li>
        
    );
}
export {Navbar, NavItem};
