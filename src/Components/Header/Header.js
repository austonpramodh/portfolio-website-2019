import React, { Component } from 'react';
import './Header.css';
import { Zoom } from 'react-reveal';

class Header extends Component {

  render() {
    return (
      <div id="headerPage">
      <header className="header">
      <Zoom>
      <h1>Hey, I'm Auston Pramodh Barboza.
      <br />
      I am a full-stack web developer.</h1>
      </Zoom>
      </header>
      </div>
    );
  }

}

export default Header;
