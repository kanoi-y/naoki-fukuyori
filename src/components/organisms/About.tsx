import { VFC } from "react";
import styled from "styled-components";

export const About: VFC = () => {
  return (
    <div>
      <STitle>About</STitle>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const STitle = styled.h2`
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 0.05em;
  font-family: Righteous;
  margin: 0;
  position: relative;
  z-index: 50;
  text-align: center;
`;
