import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/** This is a custom input with Props */

class Input extends Component {
  borderChooser(error) {
    if (error) {
      return "#f45c42";
    }
    return "#12167f";
  }
  render() {
    const { placeholder, label, error, errorMessage } = this.props;
    const Label = styled.label`
      display: block;
      padding-bottom: 1rem;
    `;
    const ErrorLabel = styled.label`
      display: block;
      color: red;
      padding-top: 0.5rem;
    `;
    const CustomInput = styled.input`
      height: 4rem;
      font-size: 2rem;
      padding: 1rem;
      width: ${() =>
        this.props.width < 500 ? this.props.width + "px" : "500px"};
      border-radius: 5px;
      border-style: solid;
      border-color: ${props => this.borderChooser(this.props.error)}
      &:focus {
        outline: none !important;
        border: 2px solid rgba(89, 131, 198, 0.5);
        box-shadow: 0 0 0.5rem;
      }
      
    `;
    const SmallInput = styled.input`
    height: 3rem;
    font-size: 1.5rem;
    padding: 1rem;
    width: ${() =>
      this.props.width < 500 ? this.props.width + "px" : "500px"};
    border-radius: 5px;
    border-style: solid;
    border-color: ${props => this.borderChooser(this.props.error)}
    &:focus {
      outline: none !important;
      border: 2px solid rgba(89, 131, 198, 0.5);
      box-shadow: 0 0 0.5rem;
      
    }
    
  `;
    return (
      <div>
        <Label for="input">{label}</Label>
        {this.props.size.toUpperCase() === "SMALL" ? (
          <SmallInput
            name="small-input"
            type="text"
            placeholder={placeholder}
          />
        ) : (
          <CustomInput name="input" type="text" placeholder={placeholder} />
        )}

        {error ? <ErrorLabel>{errorMessage}</ErrorLabel> : ""}
      </div>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.number
};
Input.defaultProps = {
  placeholder: "Enter Text Here",
  label: "Input Text Below",
  errorMessage: "There was an Error",
  error: false,
  size: "",
  width: 250
};

export default Input;
