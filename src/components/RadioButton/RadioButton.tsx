import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const Label = styled.label<{ disabled?: boolean; }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ disabled }) => (disabled ? "#999" : "inherit")};
`;

const Input = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  checked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <Label data-testid="radio-label" disabled={disabled}>
      <Input
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      {label}
    </Label>
  );
};

export default RadioButton;
