import React from "react";
import injectSheet from "react-jss";
import ReallySmoothScroll from "really-smooth-scroll";
import PropTypes from "prop-types";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import About from "./About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Styles from "./App.css";

ReallySmoothScroll.shim();

const App = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <NavigationBar />
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object,
};
App.defaultProps = {
  classes: {},
};
export default injectSheet(Styles)(App);
