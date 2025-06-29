import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{ disabled?: boolean; }>`
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 1rem;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#0056b3")};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return <StyledButton onClick={onClick} disabled={disabled}>{label}</StyledButton>;
};

export default Button;
