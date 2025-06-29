import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{ disabled?: boolean; }>`
  font-size: 1rem;
  color: ${({ disabled }) => (disabled ? "#999" : "#000")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
`;

const Text: React.FC<TextProps> = ({ text, disabled = false }) => {
  return <StyledText disabled={disabled}>{text}</StyledText>;
};

export default Text;
