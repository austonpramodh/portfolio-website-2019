import React from "react";
import PropTypes from "prop-types";
import { Zoom } from "react-reveal";
import injectSheet from "react-jss";
import Styles from "./index.css";

const Header = props => {
  const { classes } = props;
  return (
    <div id="headerPage" className={classes.container}>
      <Zoom>
        <h1>
          Hey, I'm Auston Pramodh Barboza.
          <br />I am a full-stack web developer.
        </h1>
      </Zoom>
    </div>
  );
};
Header.propTypes = {
  classes: PropTypes.object,
};
Header.defaultProps = {
  classes: {},
};

export default injectSheet(Styles)(Header);
