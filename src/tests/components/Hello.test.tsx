import { shallow } from "enzyme";
import React from "react";
import Hello from "../../components/Hello";

test("should render Hello correctly", () => {
    const wrapper = shallow(<Hello text="Test" onClick={() => undefined} />);
    expect(wrapper).toMatchSnapshot();
});
