import "@fontsource/righteous";
import { memo, VFC } from "react";
import styled from "styled-components";

export const TopView: VFC = memo(() => {
  return (
    <SContainer>
      <STitle>Welcome</STitle>
    </SContainer>
  );
});

// const fade = keyframes`
//  from {
//     transform: translateY(0);
//   }
//   to {
//     transform: translateY(30px);
//   }
// `;

const SContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const STitle = styled.h2`
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 0.05em;
  font-family: Righteous;
  margin: 0;
  transform: translateY(-100%);
`;

// type ArrowImageType = {
//   fadeFlag: boolean;
// };

// const SArrowImage = styled.img<ArrowImageType>`
//   width: 50px;
//   opacity: ${(props) => (props?.fadeFlag ? 0.6 : 0)};
//   transition: opacity 1.5s;
//   animation: ${fade} 1s cubic-bezier(0.42, 0.41, 1, 1) infinite alternate;
// `;
