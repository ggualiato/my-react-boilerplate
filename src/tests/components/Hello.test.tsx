import React from "react";
import { Hello } from "@/components/Hello";
import { fireEvent, render } from "@testing-library/react";

test("should render Hello correctly", () => {
    const onClick = jest.fn();
    const { container, getByRole } = render(<Hello text="Test" onClick={onClick} />);
    const button = getByRole("button");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
});
