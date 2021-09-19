import React from "react";
import { shallow } from "enzyme";
import Hello from "../../components/Hello";

test("should render Hello correctly", () => {
    const wrapper = shallow(<Hello text="Test" onClick={() => undefined} />);
    expect(wrapper).toMatchSnapshot();
});
