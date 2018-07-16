import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  formatUppercase = str => {
    return str.toUpperCase();
  };
  render() {
    const { message } = this.props;
    const moveInBottom = keyframes`
      0% { opacity: 1;}
      100% { opacity: .5;}
      }
    `;
    const Button = styled.button`
      font-size: 13px;
      letter-spacing: 1px;
      background-color: #12167f;
      color: white;
      border-radius: 5px;
      padding: 1.5rem 4.5rem;
      &:hover {
        cursor: pointer;
        animation: ${moveInBottom} 0.4s;
      }
    `;
    Button.displayName = "Button";
    return (
      <div>
        <Button>{this.formatUppercase(message)}</Button>
      </div>
    );
  }
}

Button.propTypes = {
  message: PropTypes.string.isRequired
};
Button.defaultProps = {
  message: "Test Button"
};

export default Button;
