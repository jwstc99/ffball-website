
import React from "react";
import NavbarCSS from "./navbar.module.css";
import {BsChatLeftDots, BsTrophy, BsFillPersonFill} from "react-icons/bs";
import {IoStatsChartSharp} from "react-icons/io5"; 
import {FaFootballBall} from "react-icons/fa";
import Link from 'next/link';

function Navbar(props) {
    return (
        <nav className={NavbarCSS.navbar}>
            <ul className={NavbarCSS.navbarnav}>
                <NavItem icon= {<FaFootballBall />} link = "/" /> 
                <NavItem icon= {<BsFillPersonFill size={25}/>} link = "/profile"/> 
                <NavItem icon= {<BsChatLeftDots />} link = "/chat"/>
                <NavItem icon= {<BsTrophy />} link = "/records" /> 
                <NavItem icon= {<IoStatsChartSharp />} link="/stats"/> 
            </ul>
        </nav>
    );
}

function NavItem(props) {
    return (
        <li className={NavbarCSS.navitem}>
            <Link href={props.link}>
                <a className={NavbarCSS.iconbutton}>
                    {props.icon}
                </a>
            </Link>
        </li>
    );
}
export {Navbar, NavItem};
