import { Fragment } from "react";
import Link from 'next/link';
import {Navbar} from "/components/Navbar/navbar.js";
function Records() {
    return <Fragment>
        <Navbar></Navbar>
        <h1>Records Page</h1>
        <title>Birdo FFL|Records</title>
        <ul>
            <li>
                <Link href="/records/2005">2005</Link>
            </li>
            <li>
                <Link href="/records/2006">2006</Link>
            </li>
        </ul>
    </Fragment>
}

export default Records;
