import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import NavigationBar from "./NavigationBar/NavigationBar";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import ReallySmoothScroll from "really-smooth-scroll";
ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Header />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
