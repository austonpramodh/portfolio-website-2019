import React, { Component } from 'react';
import './Header.css';
// import Progress from 'react-progressbar';
import { Fade } from 'react-reveal';
import HorizontalLine from '../../../utils/HoriontalLine';

class About extends Component {

  render() {
    return (
      <div>
      <Fade top>
        <h1 className="display-3 Header">About</h1>
        <Fade right>
          {HorizontalLine({width: '7rem'})}
        </Fade>
      </Fade>
      </div>
    );
  }

}

export default About;
