import { Fragment } from "react";
import Link from 'next/link';
function Records() {
    return <Fragment>
        <h1>Records Page</h1>
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
