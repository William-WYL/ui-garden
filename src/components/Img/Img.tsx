import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{ disabled?: boolean; }>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />;
};

export default Img;
