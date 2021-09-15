import myIcon from "images/myicon.png";
import { VFC } from "react";
import styled from "styled-components";

export const About: VFC = () => {
  return (
    <SContainer>
      <STitle>About</STitle>
      <SItemIcon>
        <SItemImage>
          <img src={myIcon} alt="カノイのアイコン" />
        </SItemImage>
      </SItemIcon>
      <SItemBigText>
        <p>ああああああああああああああああああああああああああ</p>
      </SItemBigText>
      <SItemSmallText>
        <p>ああああああああああ</p>
      </SItemSmallText>
      <SItemSmallText>
        <p>あああああああああああああ</p>
      </SItemSmallText>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 25px;
  box-sizing: border-box;
`;

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

const SItem = styled.div`
  position: relative;
  background-color: #f2f2f2;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 13px;
    transform: translate(-50%, -50%) rotate(-30deg);
    border-right: 20px solid transparent;
    border-bottom: 34px solid #c7b299;
    border-left: 20px solid transparent;
    z-index: 0;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: calc(100% - 13px);
    transform: translate(-50%, -50%) rotate(30deg);
    border-right: 20px solid transparent;
    border-bottom: 34px solid #c7b299;
    border-left: 20px solid transparent;
    z-index: 0;
  }
`;

const SItemIcon = styled(SItem)`
  width: 85px;
  height: 85px;
  &::before {
    top: 0;
    left: 13px;
    transform: translate(-50%, -50%) rotate(-30deg);
    border-right: 20px solid transparent;
    border-bottom: 34px solid #c7b299;
    border-left: 20px solid transparent;
  }
  &::after {
    top: 0;
    left: calc(100% - 13px);
    transform: translate(-50%, -50%) rotate(30deg);
    border-right: 20px solid transparent;
    border-bottom: 34px solid #c7b299;
    border-left: 20px solid transparent;
  }
`;

const SItemImage = styled.figure`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
  margin: 0;
  position: relative;
  z-index: 2;
  > img {
    width: 100%;
  }
`;

const SItemBigText = styled(SItem)`
  width: 160px;
  height: 160px;
  background-color: #c7b299;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
  &::before {
    top: 0;
    left: 30px;
    transform: translate(-50%, -50%) rotate(-30deg);
    border-right: 40px solid transparent;
    border-bottom: 68px solid #c7b299;
    border-left: 40px solid transparent;
    z-index: 0;
  }
  &::after {
    top: 0;
    left: calc(100% - 30px);
    transform: translate(-50%, -50%) rotate(30deg);
    border-right: 40px solid transparent;
    border-bottom: 68px solid #c7b299;
    border-left: 40px solid transparent;
    z-index: 0;
  }
  > p {
    font-weight: bold;
    font-size: 16px;
    position: relative;
    z-index: 1;
  }
`;

const SItemSmallText = styled(SItem)`
  width: 110px;
  height: 110px;
  background-color: #c7b299;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
  &::before {
    top: 0;
    left: 30px;
    transform: translate(-50%, -50%) rotate(-30deg);
    border-right: 30px solid transparent;
    border-bottom: 51px solid #c7b299;
    border-left: 30px solid transparent;
    z-index: 0;
  }
  &::after {
    top: 0;
    left: calc(100% - 30px);
    transform: translate(-50%, -50%) rotate(30deg);
    border-right: 30px solid transparent;
    border-bottom: 51px solid #c7b299;
    border-left: 30px solid transparent;
    z-index: 0;
  }
  > p {
    font-weight: bold;
    font-size: 16px;
    position: relative;
    z-index: 1;
  }
`;
