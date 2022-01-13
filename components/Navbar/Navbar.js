import React from "react";

import NavbarCSS from "./navbar.module.css";
import {BsChatLeftDots, BsTrophy, BsFillPersonFill} from "react-icons/bs";
import {IoStatsChartSharp} from "react-icons/io5";



function Navbar(props) {
    return (
        <nav className={NavbarCSS.navbar}>
         <ul className={NavbarCSS.navbarnav}>
         <NavItem icon= {<BsFillPersonFill size={70}/>} />
         <NavItem icon= {<BsChatLeftDots />} />
         <NavItem icon= {<BsTrophy />} />
         <NavItem icon= {<IoStatsChartSharp />} /></ul>
        </nav>
    );
}

function NavItem(props) {
    return (
        <li className={NavbarCSS.navitem}>
            <a href = "#" className={NavbarCSS.iconbutton}>
                {props.icon}
            </a>
        </li>
    );
}
export {Navbar, NavItem};
