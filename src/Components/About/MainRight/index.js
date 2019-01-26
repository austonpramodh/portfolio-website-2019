import React from "react";
import PropTypes from "prop-types";
// import Progress from 'react-progressbar';
import { Fade } from "react-reveal";
import { Progress } from "reactstrap";
import injectSheet from "react-jss";
import Styles from "./index.css";

const MainRight = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Fade right>
        <b>HTML</b>
        <Progress animated color="info" value="80" />
        <b>CSS</b>
        <Progress animated color="info" value="60" />
        <b>Javascript</b>
        <Progress animated color="info" value="70" />
        <b>NodeJS</b>
        <Progress animated color="info" value="70" />
        <b>ReactJS</b>
        <Progress animated color="info" value="80" />
        <b>Redux</b>
        <Progress animated color="info" value="70" />
        <b>JSP and Servlets</b>
        <Progress animated color="info" value="60" />
      </Fade>
    </div>
  );
};

MainRight.propTypes = {
  classes: PropTypes.object,
};
MainRight.defaultProps = {
  classes: {},
};
export default injectSheet(Styles)(MainRight);
