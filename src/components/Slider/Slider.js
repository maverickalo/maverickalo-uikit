import React, { Component } from "react";
import styled from "styled-components";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 50 };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.currentTarget.value });
  }
  render() {
    const SliderContainer = styled.div`
      width: 100%;
    `;
    return (
      <SliderContainer>
        <input
          name="output"
          type="range"
          min="0"
          max="100"
          value={this.state.value}
          onInput={this.handleChange}
        />
        <output for="output">{this.state.value}</output>
      </SliderContainer>
    );
  }
}
export default Slider;
