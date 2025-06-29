import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Card from "./Card";

describe("Card Component", () => {
  it("should be visible with given title and content", () => {
    render(<Card title="Card Title" content="This is card content." />);
    expect(screen.getByText("Card Title")).toBeVisible();
    expect(screen.getByText("This is card content.")).toBeVisible();
  });

  it("should have grey background and not-allowed cursor when disabled", () => {
    render(<Card title="Disabled Card" disabled />);
    const card = screen.getByTestId("card-container");
    expect(card).toHaveStyle("background-color: #f5f5f5");
    expect(card).toHaveStyle("cursor: not-allowed");
  });
});
