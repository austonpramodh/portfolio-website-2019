import React, { Component } from 'react';
import './About.css';
import { Container , Row , Col  } from 'reactstrap';
// import Progress from 'react-progressbar';
import { Jumbotron }  from 'reactstrap';
import Header from './Header/Header';
import SubHeader from './SubHeader/SubHeader';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

class About extends Component {

  render() {
    return (
      <div id="aboutPage">
      <Jumbotron className="About-jumbotron">
      <Header />
      <Container className="About-Container">
      <SubHeader />
      <Row>
      <Col>
      <MainLeft />
       </Col>
      <Col>
      <MainRight />
      </Col>
      </Row>
      </Container>
       </Jumbotron>
      </div>
    );
  }
}

export default About;
