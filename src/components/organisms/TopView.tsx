import "@fontsource/righteous";
import { Footprints } from "components/molecules/Footprints";
import { memo, useCallback, useEffect, useState, VFC } from "react";
import styled from "styled-components";

export const TopView: VFC = memo(() => {
  const [pawArray, setPawArray] = useState<{ flag: boolean }[]>([
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: false },
  ]);

  const displayPaw = useCallback(() => {
    setTimeout(() => {
      const pawIndex = pawArray.findIndex((paw) => paw.flag === false);

      if (pawIndex === -1) return;
      setPawArray([
        ...pawArray.slice(0, pawIndex),
        { flag: true },
        ...pawArray.splice(pawIndex + 1),
      ]);
      console.log(pawArray);
    }, 300);
  }, [pawArray]);

  useEffect(() => {
    displayPaw();
  }, [displayPaw]);

  return (
    <SContainer>
      <STitle>Welcome</STitle>
      <Footprints pawArray={pawArray} top={-7} left={130} angle={-35} />
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
  position: relative;
  z-index: 50;
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
