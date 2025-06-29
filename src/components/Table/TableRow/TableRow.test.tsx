import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import TableRow from "./TableRow";

describe("TableRow Component", () => {
  it("renders children and is visible", () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Cell Content</td>
          </TableRow>
        </tbody>
      </table>
    );
    expect(screen.getByText("Cell Content")).toBeVisible();
  });

  it("applies disabled styles when disabled is true", () => {
    render(
      <table>
        <tbody>
          <TableRow disabled>
            <td>Disabled Cell</td>
          </TableRow>
        </tbody>
      </table>
    );

    const row = screen.getByRole("row");

    expect(row).toHaveStyle("background-color: #f0f0f0");
    expect(row).toHaveStyle("cursor: not-allowed");
    expect(row).toHaveAttribute("aria-disabled", "true");
  });

  it("passes disabled prop to child components", () => {
    const Child = ({ disabled }: { disabled?: boolean; }) => (
      <div data-testid="child">{disabled ? "disabled" : "enabled"}</div>
    );

    render(
      <table>
        <tbody>
          <TableRow disabled>
            <Child />
          </TableRow>
        </tbody>
      </table>
    );

    const child = screen.getByTestId("child");
    expect(child.textContent).toBe("disabled");
  });
});
