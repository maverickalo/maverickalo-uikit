import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

class RadioContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Container = styled.label`
      display: block;
      position: relative;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    `;
    return <Container>{this.props.children}</Container>;
  }
}

class Radio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Checkbox = styled.input`
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
    `;
    const Checkmark = styled.span`
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: red;
      border-radius: 50%;
    `;
    return (
      <div>
        <RadioContainer>
          <Checkbox type="radio" name="radio" />
          <Checkmark />
        </RadioContainer>
        <RadioContainer>
          <Checkbox type="radio" name="radio" />
          <Checkmark />
        </RadioContainer>
      </div>
    );
  }
}

Radio.propTypes = {};
Radio.defaultProps = {};

export default Radio;
