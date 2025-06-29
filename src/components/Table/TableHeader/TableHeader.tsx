import React, { ReactElement } from "react";
import type { TableHeaderProps } from "./TableHeader.types";
import styled from "styled-components";

const StyledThead = styled.thead`
  background-color: #f0f0f0;
`;

const StyledTh = styled.th<{ disabled?: boolean; }>`
  padding: 8px;
  border: 1px solid #ddd;
  color: ${({ disabled }) => (disabled ? "#999" : "inherit")};
  background-color: ${({ disabled }) => (disabled ? "#f5f5f5" : "inherit")};
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled, className }) => {
  return (
    <StyledThead className={className}>
      <tr>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as ReactElement<{ disabled?: boolean; }>, { disabled });
          }
          return child;
        })}
      </tr>
    </StyledThead>
  );
};

export default TableHeader;
