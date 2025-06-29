import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import RadioButton from "./RadioButton";

describe("RadioButton Component", () => {
  it("should render with label and be visible", () => {
    render(<RadioButton label="Radio 1" name="test" />);
    expect(screen.getByLabelText("Radio 1")).toBeVisible();
  });

  it("should be disabled and show disabled styles", () => {
    render(<RadioButton label="Disabled" name="test" disabled />);
    const radio = screen.getByLabelText("Disabled");
    expect(radio).toBeDisabled();

    const label = screen.getByTestId("radio-label");
    expect(label).toHaveStyle("color: #999");
    expect(label).toHaveStyle("cursor: not-allowed");
  });
});
