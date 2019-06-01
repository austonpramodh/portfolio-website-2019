import React from "react";
// import Progress from 'react-progressbar';
import { Fade } from "react-reveal";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import HorizontalLine from "../../../utils/HoriontalLine";
import Styles from "./index.css";

const Header = props => {
  const { classes } = props;
  return (
    <div>
      <Fade top>
        <h1 className={`display-3 ${classes.heading}`}>About Me</h1>
        <Fade right>
          <HorizontalLine width="7rem" color="#4c4c4c" />
        </Fade>
      </Fade>
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
