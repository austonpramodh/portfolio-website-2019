import React from "react";
// import "./MainLeft.css";
// import Progress from 'react-progressbar';
import { Fade } from "react-reveal";
import Hexagon from "react-hexagon";
import injectSheet from "react-jss";
import Styles from "./index.css";

const MainLeft = () => (
  <div>
    <Fade left>
      <Hexagon
        style={{ stroke: "#fff" }}
        backgroundImage="assets/profile.jpg"
        href="http://facebook.com/austonpramodh"
        diagnol={200}
      />
      <h4>Who am i?</h4>
      <p>
        I'm the Full Stack Developer for Foscio Ecommerce in Bangalore, OR. I have serious passion
        for UI effects, animations and creating intuitive, dynamic user experiences. Let's make
        something special.
      </p>
    </Fade>
  </div>
);

export default injectSheet(Styles)(MainLeft);
