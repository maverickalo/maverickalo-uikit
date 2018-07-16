import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "./Button";

configure({ adapter: new Adapter() });

describe("Button", () => {
  it("should render the app", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find("Button").exists()).toBe(true);
  });
});
