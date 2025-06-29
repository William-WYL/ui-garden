import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Button from "./Button";

describe("Button Component", () => {
  it("should be visible with given label", () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText("Test Button");
    expect(buttonElement).toBeVisible();
  });

  it("should have grey background when disabled", () => {
    render(<Button label="Disabled" disabled />);
    const button = screen.getByText("Disabled");
    expect(button).toHaveStyle(`background-color: #ccc`);
    expect(button).toHaveStyle(`cursor: not-allowed`);
  });
});
