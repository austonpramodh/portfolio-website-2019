import React, { Component } from 'react';
import './Contact.css';
import { Form, FormGroup, Input, Button, Jumbotron , Alert } from 'reactstrap';
import HorizontalLine from '../../utils/HoriontalLine';
import { Fade , Bounce } from 'react-reveal';
import * as emailjs from 'emailjs-com';

class Contact extends Component {
  state ={
    name: "",
    email: "",
    inputMessage: "",
    message: false,
    errMessage: false,
    sending: false
  };
  handleInputChange = (event) => {
    const email = event.target.name;
    const value = event.target.value;
    this.setState(() => ({[email] : value}))
    if(this.state.message || this.state.errMessage) {
      this.setState(()=>({message : false , errMessage : false}));
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      subject : "auston-XYZ-contactForm",
      message : this.state.inputMessage,
      from_name: this.state.name,
      from_email: this.state.email,
    };
    this.setState(() => ({ sending: true}));
    emailjs.send("gmail" , "auston_xyz_contactform" , templateParams , "user_CUOJ6CT4RKSCkTtFsvamY").then((response) => {
      this.setState(() => ({ sending: false}));
       this.setState(()=>({message : true}));
    }, (err) => {
      this.setState(() => ({ sending: false}));
       this.setState(()=>({errMessage : true}));
    });
    this.setState(()=>({name : "" , email : "" , inputMessage : ""}));
  }

  render() {
    return (
      <div className='Contact' id="ContactPage">
      <Jumbotron className='Contact-jumbotron'>
      <Fade top>
        <h1 className="display-3 Contact-header">Contact</h1>
        </Fade>
        <Fade left>
        {HorizontalLine({width:"8rem"})}
        </Fade>
        <Fade right>
        <p className="display-6 Contact-header">have a Question or want to work with me?</p>
        </Fade>
        <Fade left>
        <Form onSubmit={this.handleSubmit} >
      <FormGroup>
        <Input type="name" name="name" id="name" placeholder="Name" className="Contact-Name" value={this.state.name} onChange={this.handleInputChange}/>
        <Input type="email" name="email" id="email" placeholder="Email" className="Contact-Email" value={this.state.email} onChange={this.handleInputChange}/>
        <Input type="" name="inputMessage" id="message" placeholder="Your Message" className="Contact-Message" value={this.state.inputMessage} onChange={this.handleInputChange}/>
      </FormGroup>
      <Button>Submit</Button>
      </Form>
      </Fade>
      <Bounce >
      <div className="Contact-responseMessage">
      {this.state.message &&
      <Alert color="success">
        Message Sent Successfully
      </Alert>}
    {this.state.errMessage &&
      <Alert color="danger">
        There is Some error, Please try reloading the page or check your internet connection.
      </Alert>}
      {this.state.sending &&
        <Alert color="info">
          Sending Message! Please Wait.
        </Alert>}
      </div>
      </Bounce>
      </Jumbotron>

      </div>
    );
  }

}

export default Contact;
