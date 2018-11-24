import React, { Component } from 'react';
import './Footer.css';
import { Container , Col , Row } from 'reactstrap';
import Icon from '@mdi/react'
import { mdiLinkedin , mdiFacebook , mdiEmail , mdiGithubBox , mdiArrowUpBoldHexagonOutline , mdiTwitter } from '@mdi/js'
import { Bounce } from "react-reveal";
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Footer extends Component {

  render() {
    const iconSize = 2;
    return (
      <div className="Footer">
      <Container>
      <Row className="Footer-Button">
      <Col>
      <Bounce>
      <AnchorLink href="#headerPage">
      <Icon path={mdiArrowUpBoldHexagonOutline}
        size={iconSize}
        color="white"
        />
        </AnchorLink>
        </Bounce>
      </Col>
      </Row>
      <Row>
      <Col>
      <Bounce>
      <a href="https://twitter.com/austonpramodh">
      <Icon path={mdiTwitter}
        size={iconSize}
        color="grey"/>
        </a>
        </Bounce>
         </Col>
      <Col>
      <Bounce>
      <a href="https://www.linkedin.com/in/austonpramodh">
      <Icon path={mdiLinkedin}
        size={iconSize}
        color="grey"/>
        </a>
        </Bounce>
         </Col>
      <Col>
      <Bounce>
      <a href="http://facebook.com/austonpramodh">
      <Icon path={mdiFacebook}
        size={iconSize}
        color="grey"/>
        </a>
        </Bounce>
        </Col>
      <Col>
      <Bounce>
      <a href="mailto:austonpramodh@gmail.com?Subject=auston-XYZ-contactForm">
      <Icon path={mdiEmail}
        size={iconSize}
        color="grey"/>
       </a>
        </Bounce>
         </Col>
      <Col>
      <Bounce>
      <a href="http://github.com/austonpramodh">
      <Icon path={mdiGithubBox}
        size={iconSize}
        color="grey"/>
        </a>
        </Bounce>
         </Col>
      </Row>
      <Row className="Footer-Name">
      <Col>
        Auston Pramodh Barboza <span className="Footer-Year"> ©2018 </span>
      </Col>
      </Row>
      </Container>
      </div>
    );
  }

}

export default Footer;
