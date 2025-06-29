import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Dropdown from "./Dropdown";

const sampleOptions = [
  { label: "Option 1", value: "opt1" },
  { label: "Option 2", value: "opt2" },
];

describe("Dropdown Component", () => {
  it("should be visible with given options", () => {
    render(<Dropdown options={sampleOptions} selectedValue="opt1" />);
    const option1 = screen.getByText("Option 1");
    expect(option1).toBeVisible();
  });

  it("should have grey background and disabled cursor when disabled", () => {
    render(<Dropdown options={sampleOptions} disabled />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveStyle("background-color: #eee");
    expect(select).toHaveStyle("cursor: not-allowed");
  });
});
