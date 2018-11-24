import React, { Component } from 'react';
import './MainRight.css';
// import Progress from 'react-progressbar';
import { Fade } from 'react-reveal';
import { Progress } from 'reactstrap';

class MainRight extends Component {

  render() {
    return (
      <div className= "MainRight">
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
      </ Fade>
      </div>
    );
  }

}
export default MainRight;
