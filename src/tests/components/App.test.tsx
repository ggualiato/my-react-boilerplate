import React from "react";
import { App } from "@/components/App";
import { render } from "@testing-library/react";

test("should render App correctly", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
});
