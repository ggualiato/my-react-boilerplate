import React from "react";
import { shallow } from "enzyme";
import App from "../../components/App";
import { Button } from "../../components/App/styles";
import "jest-styled-components";

test("should render App correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});

test("Button should have color blue", () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule("color", "blue");
});
