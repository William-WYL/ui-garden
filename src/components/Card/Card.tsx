import React from "react";
import styled from "styled-components";

export interface CardProps {
  title: string;
  content?: string;
  disabled?: boolean;
}

const StyledCard = styled.div<{ disabled?: boolean; }>`
  background-color: ${({ disabled }) => (disabled ? "#f5f5f5" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Card: React.FC<CardProps> = ({ title, content, disabled }) => {
  return (
    <StyledCard disabled={disabled} data-testid="card-container">
      <h3>{title}</h3>
      {content && <p>{content}</p>}
    </StyledCard>
  );
};

export default Card;
