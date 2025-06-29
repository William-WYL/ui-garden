import React from "react";
import { render, screen } from "@testing-library/react";
import TableFooter from "./TableFooter";
import TableCell from "../TableCell/TableCell";

describe("TableFooter Component", () => {
  it("renders footer cells and is visible", () => {
    render(
      <table>
        <TableFooter>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableFooter>
      </table>
    );
    expect(screen.getByText("Footer 1")).toBeVisible();
    expect(screen.getByText("Footer 2")).toBeVisible();
  });

  it("applies disabled styles to footer cells", () => {
    render(
      <table>
        <TableFooter disabled>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableFooter>
      </table>
    );
    const footer1 = screen.getByText("Footer 1");
    expect(footer1).toHaveStyle("color: #999");
    expect(footer1).toHaveStyle("background-color: #f5f5f5");
  });
});
