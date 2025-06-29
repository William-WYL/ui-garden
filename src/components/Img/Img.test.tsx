import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Img from "./Img";

describe("Img Component", () => {
  it("should render with given src and alt", () => {
    render(<Img src="test.png" alt="test image" />);
    const img = screen.getByAltText("test image") as HTMLImageElement;
    expect(img).toBeVisible();
    expect(img.src).toContain("test.png");
  });

  it("should have grayscale and pointer-events none when disabled", () => {
    render(<Img src="test.png" alt="disabled image" disabled />);
    const img = screen.getByAltText("disabled image");
    expect(img).toHaveStyle("filter: grayscale(100%)");
    expect(img).toHaveStyle("pointer-events: none");
  });
});
