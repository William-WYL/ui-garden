import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{ disabled?: boolean; }>`
  font-size: 1rem;
  color: ${({ disabled }) => (disabled ? "#999" : "#333")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled }) => {
  return <StyledLabel htmlFor={htmlFor} disabled={disabled}>{text}</StyledLabel>;
};

export default Label;