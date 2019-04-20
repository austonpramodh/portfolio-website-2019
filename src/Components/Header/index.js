import React from "react";
import PropTypes from "prop-types";
import { Zoom } from "react-reveal";
import injectSheet from "react-jss";
import Icon from "@mdi/react";
import { mdiArrowDownThick } from "@mdi/js";
import Styles from "./index.css";
import Typer from "../Typer";
import "./animations.css";

const isMobile = window.innerWidth < 700;

const Header = props => {
  const { classes } = props;
  return (
    <div id="headerPage" className={classes.container}>
      {/* <div className={classes.header}> */}
      <Zoom>
        <h1 className={classes.header}>
          Hey, I'm {isMobile && <br />}Auston Pramodh Barboza.
          <br />I am a full-stack Developer.
          <br />
          <Typer
            dataText={[
              "ReactJS.",
              "React Native.",
              "Flutter.",
              "Android.",
              "IOS.",
              "NodeJS.",
              "TypeScript.",
            ]}
          />
        </h1>
      </Zoom>
      {/* </div> */}
      <Icon path={mdiArrowDownThick} size={2} className={classes.icon} />
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
