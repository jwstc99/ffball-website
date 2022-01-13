import { Fragment } from "react";
import {Navbar} from "../components/Navbar/navbar.js";
import HomeCSS from '/styles/index.module.css';

function Home() {
  return (
    <Fragment>
    <title>Birdo FFL|Home</title>
    <Navbar/>
    <div className={HomeCSS.homepage}>
      <div className={HomeCSS.loginlayout}>
        <div className={HomeCSS.loginwelcome}></div>
      </div>
      <div className={HomeCSS.news}></div>
    </div>
    </Fragment>
  );
}
export default Home;



