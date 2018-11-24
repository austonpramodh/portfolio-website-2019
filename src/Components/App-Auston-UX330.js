import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import NavigationBar from './NavigationBar/NavigationBar';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
const mail = require("../utils/mail");
mail({name : "auston" , email: "ausytonprmaohd@gmail.com"});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavigationBar />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
