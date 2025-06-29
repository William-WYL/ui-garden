import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Label from "./Label";

describe("Label Component", () => {
  it("should be visible with given text", () => {
    render(<Label text="Email" />);
    const label = screen.getByText("Email");
    expect(label).toBeVisible();
  });

  it("should have grey color when disabled", () => {
    render(<Label text="Name" disabled />);
    const label = screen.getByText("Name");
    expect(label).toHaveStyle("color: #999");
    expect(label).toHaveStyle("cursor: not-allowed");
  });
});
