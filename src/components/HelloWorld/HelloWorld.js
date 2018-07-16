import React from "react";
import PropTypes from "prop-types";

/** A fun component that shows how this works!! */

function HelloWorld({ message }) {
  return <div>Hello {message}</div>;
}

HelloWorld.propTypes = {
  /** Message to Display */
  message: PropTypes.string
};

HelloWorld.defaultProps = {
  message: "Man"
};
export default HelloWorld;
