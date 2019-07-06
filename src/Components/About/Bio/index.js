import React from "react";
// import "./MainLeft.css";
// import Progress from 'react-progressbar';
import { Fade } from "react-reveal";
import Hexagon from "react-hexagon";
import injectSheet from "react-jss";
import { Container, Row, Col } from "reactstrap";
import Styles from "./index.css";

const MainLeft = ({ classes }) => (
  <div>
    <Container>
      <Row>
        <Col>
          <Fade left>
            <Hexagon
              className={classes.hexagon}
              style={{ stroke: "#fff" }}
              backgroundImage="assets/profile.webp"
              href="http://facebook.com/austonpramodh"
              diagnol={200}
            />
          </Fade>
        </Col>
        <Col className={classes.descriptionContainer}>
          <Fade right>
            <h4>Who am i?</h4>
            <p>
              I'm the Full Stack Developer for Foscio Ecommerce in Bangalore, OR. I have serious
              passion for UI effects, animations and creating intuitive, dynamic user experiences.
              Let's make something special.
            </p>
          </Fade>
        </Col>
      </Row>
    </Container>
  </div>
);

export default injectSheet(Styles)(MainLeft);
