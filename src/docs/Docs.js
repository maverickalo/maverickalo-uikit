import React, { Component } from "react";
import componentData from "../../config/componentData";
import Nav from "./Nav";
import ComponentPage from "./ComponentPage";

export default class Docs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }
  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({ route: window.location.hash.substr(1) });
    });
  }
  render() {
    const { route } = this.state;
    const component = route
      ? componentData.filter(component => component.name === route)[0]
      : componentData[0];
    return (
      <div>
        <Nav components={componentData.map(component => component.name)} />
        <ComponentPage component={component} />
      </div>
    );
  }
}
