import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Input, Button, Jumbotron, Alert } from "reactstrap";
import { Fade, Bounce } from "react-reveal";
import * as emailjs from "emailjs-com";
import injectSheet from "react-jss";
import HorizontalLine from "../../utils/HoriontalLine";
import Styles from "./index.css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    inputMessage: "",
    sent: false,
    errSending: false,
    sending: false,
    invalidInput: false,
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
    const { sent, errSending, invalidInput } = this.state;
    if (sent || errSending || invalidInput) {
      this.setState(() => ({
        sent: false,
        errSending: false,
        invalidInput: false,
      }));
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, inputMessage } = this.state;
    if (name && email && inputMessage) {
      const templateParams = {
        subject: "auston-XYZ-contactForm",
        message: inputMessage,
        from_name: name,
        from_email: email,
      };
      this.setState(() => ({ sending: true }));
      emailjs
        .send("gmail", "auston_xyz_contactform", templateParams, "user_CUOJ6CT4RKSCkTtFsvamY")
        .then(
          // eslint-disable-next-line no-unused-vars
          response => {
            this.setState(() => ({ sending: false }));
            this.setState(() => ({ sent: true }));
          },
          // eslint-disable-next-line no-unused-vars
          err => {
            this.setState(() => ({ sending: false }));
            this.setState(() => ({ errSending: true }));
          },
        );
      this.setState(() => ({ name: "", email: "", inputMessage: "" }));
    } else {
      this.setState(() => ({ invalidInput: true }));
    }
  };

  render() {
    const { classes } = this.props;
    const { name, email, inputMessage, sent, errSending, sending, invalidInput } = this.state;
    return (
      <div className={classes.container} id="ContactPage">
        <Jumbotron className={classes.jumbotron}>
          <Fade top>
            <h1 className={`display-3 ${classes.header}`}>Contact</h1>
          </Fade>
          <Fade left>
            <HorizontalLine width="8rem" />
          </Fade>
          <Fade right>
            <p className={`display-6 ${classes.header}`}>
              have a Question or want to work with me?
            </p>
          </Fade>
          <Fade left>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className={classes.name}
                  value={name}
                  onChange={this.handleInputChange}
                />
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={classes.email}
                  value={email}
                  onChange={this.handleInputChange}
                />
                <Input
                  type=""
                  name="inputMessage"
                  id="message"
                  placeholder="Your Message"
                  className={classes.message}
                  value={inputMessage}
                  onChange={this.handleInputChange}
                  autoComplete="off"
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Fade>
          <Bounce>
            <div className={classes.responseMessage}>
              {sent && <Alert color="success">Message Sent Successfully</Alert>}
              {errSending && (
                <Alert color="danger">
                  There is Some error, Please try reloading the page or check your internet
                  connection.
                </Alert>
              )}
              {sending && <Alert color="info">Sending Message! Please Wait.</Alert>}
              {invalidInput && <Alert color="danger">Please check all the Fields.</Alert>}
            </div>
          </Bounce>
        </Jumbotron>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object,
};
Contact.defaultProps = {
  classes: {},
};

export default injectSheet(Styles)(Contact);
