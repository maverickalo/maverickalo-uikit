import React, { Component } from "react";
import CodeExample from "./CodeExample";
import PropTypes from "prop-types";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }
  updateShow = e => {
    e.preventDefault();
    this.setState(prevState => {
      return { showCode: !prevState.showCode };
    });
  };
  render() {
    const { showCode } = this.state;
    const { code, description, name } = this.props.example;
    const ExampleComponent = require(`./examples/${
      this.props.componentName
    }/${name}`).default;
    return (
      <div className="example">
        {description && <h4>{description}</h4>}

        <ExampleComponent />
        <p>
          <a href="#" onClick={this.updateShow}>
            {showCode ? "Hide" : "Show"} Code
          </a>
        </p>
        {showCode && <CodeExample>{code}</CodeExample>}
      </div>
    );
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
};

export default Example;
