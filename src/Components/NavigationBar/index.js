import React from "react";
import PropTypes from "prop-types";
import { Button, Navbar } from "reactstrap";
import InjectSheet from "react-jss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Styles from "./index.css";

const NavigationBar = props => {
  const { classes } = props;
  return (
    <div>
      <Navbar color="dark" light expand="md" className={classes.bar} fixed="top">
        <div className={classes.container}>
          <AnchorLink href="#headerPage">
            <Button color="primary" className={classes.button}>
              {" "}
              Home
            </Button>
          </AnchorLink>
          <AnchorLink href="#aboutPage">
            <Button color="primary" className={classes.button}>
              {" "}
              About{" "}
            </Button>
          </AnchorLink>
          <AnchorLink href="#ContactPage">
            <Button color="primary" className={classes.button}>
              {" "}
              Contact{" "}
            </Button>
          </AnchorLink>
        </div>
      </Navbar>
    </div>
  );
};

NavigationBar.propTypes = {
  classes: PropTypes.object,
};
NavigationBar.defaultProps = {
  classes: {},
};

export default InjectSheet(Styles)(NavigationBar);
