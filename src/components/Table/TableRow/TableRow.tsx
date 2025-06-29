import React from "react";
import styled from "styled-components";
import type { TableRowProps } from "./TableRow.types";

const StyledTr = styled.tr<{ disabled?: boolean; }>`
  background-color: ${(props) => (props.disabled ? "#f0f0f0" : "transparent")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  color: ${(props) => (props.disabled ? "#999" : "inherit")};
`;

const TableRow: React.FC<TableRowProps> = ({ children, disabled = false }) => {
  return (
    <StyledTr disabled={disabled} aria-disabled={disabled}>
      {React.Children.map(children, (child) =>
        React.isValidElement<{ disabled?: boolean; }>(child)
          ? React.cloneElement(child, { disabled })
          : child
      )}
    </StyledTr>
  );
};

export default TableRow;
