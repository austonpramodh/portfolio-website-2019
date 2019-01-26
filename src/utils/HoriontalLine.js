import React from "react";
import PropTypes from "prop-types";

const HorizontalLine = ({ color, width, height }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height,
      width,
    }}
  />
);

HorizontalLine.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

HorizontalLine.defaultProps = {
  color: "black",
  height: "0.25rem",
  width: "2rem",
};

export default HorizontalLine;
