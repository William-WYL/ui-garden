import React from "react";
import type { TableCellProps } from "./TableCell.types";
import styled from "styled-components";

const StyledTd = styled.td<{ disabled?: boolean; }>`
  padding: 8px;
  border: 1px solid #ddd;
  background-color: ${({ disabled }) => (disabled ? "#f5f5f5" : "white")};
  color: ${({ disabled }) => (disabled ? "#999" : "inherit")};
`;

const TableCell: React.FC<TableCellProps> = ({ children, disabled, className }) => {
  return (
    <StyledTd disabled={disabled} className={className}>
      {children}
    </StyledTd>
  );
};

export default TableCell;

