import React from "react";
import PropTypes from "prop-types";
import { Zoom } from "react-reveal";
import injectSheet from "react-jss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Icon from "@mdi/react";
import { mdiArrowDownThick } from "@mdi/js";
import Styles from "./index.css";
import Typer from "../Typer";
import "./animations.css";

// eslint-disable-next-line no-undef
const isMobile = window.innerWidth < 700;

const Header = props => {
  const { classes } = props;
  return (
    <div id="headerPage" className={classes.container}>
      <Zoom>
        <div className={classes.innerContainer}>
          <div className={classes.header1}>
            Hey, I'm {isMobile && <br />}Auston Pramodh Barboza.
          </div>
          <div className={classes.textBox}>
            <div className={classes.header2}>I am a full-stack web developer.</div>
          </div>
          <div className={classes.textBox}>
            <div className={classes.typerBox}>
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
            </div>
          </div>
        </div>
      </Zoom>
      <AnchorLink href="#aboutPage">
        <Icon path={mdiArrowDownThick} size={2} className={classes.icon} />
      </AnchorLink>
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
