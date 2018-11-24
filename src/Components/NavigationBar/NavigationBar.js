import React, { Component } from 'react';
import './NavigationBar.css';
import { Button, Navbar } from 'reactstrap';

import AnchorLink from 'react-anchor-link-smooth-scroll'

class NavigationBar extends Component {

  render() {
    return (
      <div>
      <Navbar color="dark" light expand="md" className='NavigationBar' fixed={`top`} >
      <div className='NavigationBar-Container'>
      <AnchorLink href="#headerPage"><Button color="primary" className="NavigationBar-Button" > Home</Button></AnchorLink>
        <AnchorLink href="#aboutPage"><Button color="primary" className="NavigationBar-Button" > About </Button></AnchorLink>
        <AnchorLink href="#ContactPage"><Button color="primary" className="NavigationBar-Button" > Contact </Button></AnchorLink>
      </div>
      </Navbar>

      </div>
    );
  }

}

export default NavigationBar;
