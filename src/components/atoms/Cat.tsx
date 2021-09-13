import PortfolioNekoBody from "images/portfolio_neko_body.svg";
import PortfolioNekoTail from "images/portfolio_neko_tail.svg";
import { memo, useCallback, useEffect, useState, VFC } from "react";
import styled from "styled-components";

export const Cat: VFC = memo(() => {
  const [tailAngle, setTailAngle] = useState(0);

  const scrollTailMove = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const totalAngle = 72;

    const newTailAngle =
      scrollTop / 2 % totalAngle <= (totalAngle - 2) / 2
        ? -(scrollTop / 2 % totalAngle)
        : (scrollTop / 2 % totalAngle) - (totalAngle - 1);

    setTailAngle(newTailAngle);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollTailMove, { passive: true });
    return () => {
      document.removeEventListener("scroll", scrollTailMove);
    };
  }, [scrollTailMove]);

  return (
    <SContainer>
      <SCatBody src={PortfolioNekoBody} alt="ネコの体" />
      <SCatTail
        src={PortfolioNekoTail}
        style={{ transform: `translate(-50%, -50%) rotate(${tailAngle}deg)` }}
        alt="ネコの尻尾"
      />
    </SContainer>
  );
});

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
