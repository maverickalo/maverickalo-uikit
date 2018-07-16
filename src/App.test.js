import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<App/>", () => {
  it("Should Render the App Component", () => {
    const wrapper = shallow(<App />);
  });
});
