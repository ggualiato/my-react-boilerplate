import React from "react";
import { render } from "@testing-library/react";
import { App } from "../../components/App";

test("should render App correctly", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
});
