import React from "react";
import type { TableProps } from "./Table.types";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Table: React.FC<TableProps> = ({ children, className }) => {
  return <StyledTable className={className}>{children}</StyledTable>;
};

export default Table;
