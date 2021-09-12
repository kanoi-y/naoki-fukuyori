import { Paw } from "components/atoms/Paw";
import { memo, VFC } from "react";
import styled from "styled-components";

type Props = {
  pawArray: { flag: boolean }[];
  top: number;
  left: number;
  angle: number;
};

export const Footprints: VFC<Props> = memo((props) => {
  const { pawArray, top, left, angle } = props;

  return (
    <SContainer
      style={{
        top: `${top}vh`,
        left: `calc(100% - ${left}px)`,
        transform: `rotate(${angle}deg)`,
      }}
    >
      {pawArray.map((paw, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: `${i % 2 === 0 ? "flex-start" : "flex-end"}`,
          }}
        >
          <Paw flag={paw.flag} />
        </div>
      ))}
    </SContainer>
  );
});

const SContainer = styled.div`
  width: 90px;
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
`;
