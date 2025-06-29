import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table Component", () => {
  it("renders children inside the table", () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Test Cell</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByText("Test Cell")).toBeVisible();
  });
});

