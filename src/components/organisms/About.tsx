import myIcon from "images/myicon.png";
import { useEffect, useState, VFC } from "react";
import styled from "styled-components";

type ItemType = {
  top: number;
  left: number;
  dir: { down: boolean; right: boolean };
  readonly size: number;
};

const itemSizeSm = 85;
const itemSizeMd = 110;
const itemSizeLg = 160;

export const About: VFC = () => {
  const [itemStateArr, setItemStateArr] = useState<ItemType[]>([
    {
      top: 20,
      left: 0,
      dir: { down: true, right: true },
      size: itemSizeSm,
    },
    {
      top: 150,
      left: 0,
      dir: { down: true, right: true },
      size: itemSizeLg,
    },
    {
      top: 370,
      left: 0,
      dir: { down: true, right: true },
      size: itemSizeMd,
    },
    {
      top: 500,
      left: 0,
      dir: { down: true, right: true },
      size: itemSizeMd,
    },
  ]);

  // const moveItem = useCallback(() => {
  //   setTimeout(() => {
  //     if (window.pageYOffset > 10) return;
  //     const newItemStateArr: ItemType[] = itemStateArr.map((itemState) => {
  //       return {
  //         top: itemState.top + 5,
  //         left: itemState.top + 5,
  //         dir: { up: itemState.dir.up, right: itemState.dir.right },
  //         size: itemState.size,
  //       };
  //     });
  //     setItemStateArr(newItemStateArr);
  //   }, 100);
  // }, [itemStateArr]);

  // const setSize = () => {
  //   setWindowWidth(window.innerWidth);
  //   setWindowHeight(window.innerHeight);
  // };

  const moveItem = (item: ItemType): ItemType => {
    let newTop = item.top;
    let newLeft = item.left;
    let newDir = { down: item.dir.down, right: item.dir.right };

    if (0 > newTop || newTop > window.innerHeight - item.size) {
      newDir.down = !newDir.down;
    }
    newDir.down ? (newTop += 3) : (newTop -= 3);

    if (0 > item.left || item.left > window.innerWidth - item.size) {
      newDir.right = !newDir.right;
    }
    newDir.right ? (newLeft += 3) : (newLeft -= 3);

    return {
      top: newTop,
      left: newLeft,
      dir: newDir,
      size: item.size,
    };
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // aboutコンポーネントが表示されている間だけ動く
      if (
        window.pageYOffset < 10 ||
        window.pageYOffset > window.innerHeight * 2
      )
        return;

      const newItemStateArr: ItemType[] = itemStateArr.map((itemState) => {
        return moveItem(itemState);
      });
      setItemStateArr(newItemStateArr);
    }, 50);
    return () => clearInterval(intervalId);
  }, [itemStateArr]);

  return (
    <SContainer>
      <STitle>About</STitle>
      <SItemIcon
        style={{
          top: `${itemStateArr[0].top}px`,
          left: `${itemStateArr[0].left}px`,
        }}
      >
        <SItemImage>
          <img src={myIcon} alt="カノイのアイコン" />
        </SItemImage>
      </SItemIcon>
      <SItemBigText
        style={{
          top: `${itemStateArr[1].top}px`,
          left: `${itemStateArr[1].left}px`,
        }}
      >
        <p>ああああああああああああああああああああああああああ</p>
      </SItemBigText>
      <SItemSmallText
        style={{
          top: `${itemStateArr[2].top}px`,
          left: `${itemStateArr[2].left}px`,
        }}
      >
        <p>ああああああああああ</p>
      </SItemSmallText>
      <SItemSmallText
        style={{
          top: `${itemStateArr[3].top}px`,
          left: `${itemStateArr[3].left}px`,
        }}
      >
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
  position: relative;
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
  position: absolute;
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
