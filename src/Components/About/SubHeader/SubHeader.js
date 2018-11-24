import React, { Component } from 'react';
import './SubHeader.css';
import { Row , Col  } from 'reactstrap';
// import Progress from 'react-progressbar';
import { Fade } from 'react-reveal';

import Icon from '@mdi/react'
import { mdiSpeedometer , mdiCellphoneLink , mdiLightbulbOutline , mdiRocket } from '@mdi/js'

class SubHeader extends Component {

  render() {
    const iconSize= 4;
    return (
      <div>
      <Row>
      <Col>
      <Fade left>
      <Icon path={mdiSpeedometer}
        size={iconSize}
        color="grey"/>
      <h1>Fast</h1>
      <p>Fast load times and lag free interaction, my highest priority.</p>
      </Fade >
      </Col>
      <Col>
      <Fade left>
      <Icon path={mdiCellphoneLink}
        size={iconSize}
        color="grey"/>
      <h1>Responsive</h1>
      <p>My layouts will work on any device, big or small.</p>
      </Fade >
      </Col>
      <Col>
      <Fade left>
      <Icon path={mdiLightbulbOutline}
        size={iconSize}
        color="grey"/>
        <h1>Intuitive</h1>
        <p>Strong preference for easy to use, intuitive UX/UI.</p>
      </Fade >
      </Col>
      <Col>
      <Fade left>
      <Icon path={mdiRocket}
        size={iconSize}
        color="grey"/>
        <h1>Dynamic</h1>
        <p>Websites don't have to be static, I love making pages come to life.</p>
      </Fade >
      </Col>
      </Row>
      </div>
    );
  }

}

export default SubHeader;
