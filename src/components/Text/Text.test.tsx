import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Text from "./Text";

describe("Text Component", () => {
  it("should be visible with given text", () => {
    render(<Text text="Hello World" />);
    const element = screen.getByText("Hello World");
    expect(element).toBeVisible();
  });

  it("should have grey color when disabled", () => {
    render(<Text text="Disabled Text" disabled />);
    const element = screen.getByText("Disabled Text");
    expect(element).toHaveStyle("color: #999");
    expect(element).toHaveStyle("cursor: not-allowed");
  });
});
