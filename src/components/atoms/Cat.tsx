import PortfolioNekoBody from "images/portfolio_neko_body.svg";
import PortfolioNekoTail from "images/portfolio_neko_tail.svg";
import { memo, VFC } from "react";
import styled from "styled-components";

export const Cat: VFC = memo(() => {
  return (
    <SContainer>
      <SCatBody src={PortfolioNekoBody} alt="ネコの体" />
      <SCatTail src={PortfolioNekoTail} alt="ネコの尻尾" />
    </SContainer>
  );
});

// const shakeTail = keyframes`
//  from {
//     transform: translate(-50%, -50%) rotate(0);
//   }
//   to {
//     transform: translate(-50%, -50%) rotate(-30deg);
//   }
// `;

const SContainer = styled.div`
  position: fixed;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

const SCatBody = styled.img`
  width: 90px;
`;

const SCatTail = styled.img`
  position: absolute;
  width: 60px;
  top: 55%;
  left: 0%;
  transform-origin: 100% 100%;
  transform: translate(-50%, -50%) rotate(0);
`;
