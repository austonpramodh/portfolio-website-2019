import React, { Fragment } from "react";
import "./index.css";
import PropTypes from "prop-types";

class Typer extends React.Component {
  static defaultProps = {
    heading: "",
    dataText: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      text: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150,
    };
  }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 80 : 250,
    });
    const number = i + 1 === dataText.length ? 0 : i + 1;
    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && (text === "" || dataText[number].startsWith(text))) {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      });
    }
    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    const { heading } = this.props;
    const { text } = this.state;
    return (
      <Fragment>
        {heading && <Fragment>{heading}&nbsp</Fragment>}
        <span>{text}</span>
        <span id="cursor" />
      </Fragment>
    );
  }
}

Typer.propTypes = {
  heading: PropTypes.string,
  dataText: PropTypes.array,
};

Typer.defaultProps = {
  heading: "",
  dataText: [],
};
export default Typer;
