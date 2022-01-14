import { Fragment } from "react";
import {Navbar} from "../components/Navbar/navbar.js";

function Home() {
  return (
    <Fragment>
    <div className="homepage-index">
      <title>Birdo FFL|Home</title>
      <Navbar/>
      <div className="fixed top-nav left-0 h-screen w-screen m-0">
        <div className="flex items-center border-green-500 border-8 w-1/3 h-screen">
          <div className="test">tset</div>
        </div>
        <div className="fixed h-screen left-1/3 top-nav border-red-500 border-8 w-2/3 "></div>
      </div>
    </div> 
    </Fragment>
    
  );
}
export default Home;



