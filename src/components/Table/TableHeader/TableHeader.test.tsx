import React from "react";
import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";
import TableCell from "../TableCell/TableCell";

describe("TableHeader Component", () => {
  it("renders header cells and is visible", () => {
    render(
      <table>
        <TableHeader>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableHeader>
      </table>
    );
    expect(screen.getByText("Header 1")).toBeVisible();
    expect(screen.getByText("Header 2")).toBeVisible();
  });

  it("applies disabled styles to header cells", () => {
    render(
      <table>
        <TableHeader disabled>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableHeader>
      </table>
    );
    const header1 = screen.getByText("Header 1");
    expect(header1).toHaveStyle("color: #999");
    expect(header1).toHaveStyle("background-color: #f5f5f5");
  });
});
