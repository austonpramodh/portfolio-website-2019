import React from "react";
import PropTypes from "prop-types";
// import "./Footer.css";
import { Container, Col, Row } from "reactstrap";
import Icon from "@mdi/react";
import {
  mdiLinkedin,
  mdiFacebook,
  mdiEmail,
  mdiGithubBox,
  mdiArrowUpBoldHexagonOutline,
  mdiTwitter,
} from "@mdi/js";
import { Bounce } from "react-reveal";
import AnchorLink from "react-anchor-link-smooth-scroll";
import injectSheet from "react-jss";
import Styles from "./index.css";

const Footer = props => {
  const { classes } = props;
  const iconSize = 2;
  return (
    <div className={classes.container}>
      <Container>
        <Row className={classes.button}>
          <Col>
            <Bounce>
              <AnchorLink href="#headerPage">
                <Icon
                  path={mdiArrowUpBoldHexagonOutline}
                  size={iconSize}
                  className={classes.upIcon}
                />
              </AnchorLink>
            </Bounce>
          </Col>
        </Row>
        <Row>
          <Col>
            <Bounce>
              <a href="https://twitter.com/austonpramodh">
                <Icon path={mdiTwitter} size={iconSize} color="grey" className={classes.icon} />
              </a>
            </Bounce>
          </Col>
          <Col>
            <Bounce>
              <a href="https://www.linkedin.com/in/austonpramodh">
                <Icon path={mdiLinkedin} size={iconSize} color="grey" className={classes.icon} />
              </a>
            </Bounce>
          </Col>
          <Col>
            <Bounce>
              <a href="http://facebook.com/austonpramodh">
                <Icon path={mdiFacebook} size={iconSize} color="grey" className={classes.icon} />
              </a>
            </Bounce>
          </Col>
          <Col>
            <Bounce>
              <a href="mailto:austonpramodh@gmail.com?Subject=auston-XYZ-contactForm">
                <Icon path={mdiEmail} size={iconSize} color="grey" className={classes.icon} />
              </a>
            </Bounce>
          </Col>
          <Col>
            <Bounce>
              <a href="http://github.com/austonpramodh">
                <Icon path={mdiGithubBox} size={iconSize} color="grey" className={classes.icon} />
              </a>
            </Bounce>
          </Col>
        </Row>
        <Row className={classes.name}>
          <Col>
            Auston Pramodh Barboza <span className={classes.year}> ©2019 </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
Footer.propTypes = {
  classes: PropTypes.object,
};
Footer.defaultProps = {
  classes: {},
};

export default injectSheet(Styles)(Footer);
