import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import Header from "./Header";
import SubHeader from "./SubHeader";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import Styles from "./index.css";

const About = props => {
  const { classes } = props;
  return (
    <div id="aboutPage" className={classes.container}>
      <Jumbotron className={classes.jumbotron}>
        <Header />
        <Container className={classes.subContainer}>
          <SubHeader />
          <Row>
            <Col>
              <MainLeft />
            </Col>
            <Col>
              <MainRight />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};
About.propTypes = {
  classes: PropTypes.object,
};
About.defaultProps = {
  classes: {},
};

export default injectSheet(Styles)(About);
