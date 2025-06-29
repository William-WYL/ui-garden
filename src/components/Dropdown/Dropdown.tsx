import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const Select = styled.select<{ disabled?: boolean; }>`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ disabled }) => (disabled ? "#eee" : "white")};
  color: ${({ disabled }) => (disabled ? "#999" : "black")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  width: 100%;
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  onChange,
  disabled = false,
}) => {
  return (
    <Select
      disabled={disabled}
      value={selectedValue}
      onChange={(e) => onChange && onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
