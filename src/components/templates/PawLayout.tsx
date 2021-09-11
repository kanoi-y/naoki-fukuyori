import { Paw } from "components/atoms/Paw";
import { memo, ReactNode, useCallback, useEffect, useState, VFC } from "react";
import { PawType } from "types/pawType";

type Props = {
  children: ReactNode;
};

export const PawLayout: VFC<Props> = memo((props) => {
  const { children } = props;

  const [pawArray, setPawArray] = useState<PawType[]>([]);
  const [pawCount, setPawCount] = useState(1);
  const [lastAngle, setLastAngle] = useState<PawType["angle"]>(180);
  const [lastLeft, setLastLeft] = useState<PawType["left"]>(0);

  const scrollDisplayPaw = useCallback(() => {
    const scrollTop = window.pageYOffset;

    if (scrollTop < 50) return;

    const parity = pawCount % 2 === 0 ? "左足" : "右足";
    const top = 50 + (pawCount - 1) * 8;
    console.log(scrollTop)

    // ピッタリではなくても大丈夫なようにする

    if (scrollTop < top) return;
    console.log("OK")

    let angle: PawType["angle"];
    let left: PawType["left"];

    if (parity === "左足") {
      if (lastAngle === 135) {
        angle = Math.floor(Math.random() * 2) + 1 === 1 ? 135 : 180;
        left = lastLeft + 35;
      } else if (lastAngle === 180) {
        angle = Math.floor(Math.random() * 2) + 1 === 1 ? 135 : 180;
        left = lastLeft + 70;
      } else {
        angle = lastAngle;
        left = lastLeft + 105;
      }
    } else {
      if (lastAngle === 135) {
        angle = lastAngle;
        left = lastLeft - 35;
      } else if (lastAngle === 180) {
        angle = Math.floor(Math.random() * 2) + 1 === 1 ? 225 : 180;
        left = lastLeft;
      } else {
        angle = Math.floor(Math.random() * 2) + 1 === 1 ? 225 : 180;
        left = lastLeft + 35;
      }
    }

    setPawArray([...pawArray, { top, left, angle, flag: false }]);
    setTimeout(() => {
      const newPawArray = pawArray.map((paw, i) => {
        if (i !== pawArray.length - 1) return paw;
        const newPaw: PawType = {
          top: paw.top,
          left: paw.left,
          angle: paw.angle,
          flag: true,
        };
        return newPaw;
      });
      setPawArray(newPawArray);
    }, 1);

    setPawCount(pawCount + 1);
    setLastAngle(angle);
    setLastLeft(left);

    // const newPawArray = pawArray.map((paw) => {
    //   if (paw.top - scrollTop <= 0) {
    //     const newPaw: PawType = {
    //       top: paw.top,
    //       left: paw.left,
    //       angle: 180,
    //       flag: true,
    //     };
    //     return newPaw;
    //   } else {
    //     const newPaw: PawType = {
    //       top: paw.top,
    //       left: paw.left,
    //       angle: 180,
    //       flag: false,
    //     };
    //     return newPaw;
    //   }
    // });
    // setPawArray(newPawArray);
  }, [pawArray, pawCount, lastAngle, lastLeft]);

  // useEffect(() => {
  //   setPawArray([
  //     { top: 50, left: 0, angle: 180, flag: false },
  //     { top: 58, left: 70, angle: 180, flag: false },
  //     { top: 66, left: 0, angle: 180, flag: false },
  //     { top: 74, left: 70, angle: 180, flag: false },
  //     { top: 82, left: 0, angle: 180, flag: false },
  //     { top: 90, left: 70, angle: 180, flag: false },
  //     { top: 98, left: 0, angle: 180, flag: false },
  //   ]);
  // }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollDisplayPaw, { passive: true });
    return () => {
      document.removeEventListener("scroll", scrollDisplayPaw);
    };
  }, [scrollDisplayPaw]);

  return (
    <div>
      {children}
      {pawArray.map((paw, i) => (
        <Paw
          key={i}
          top={paw.top}
          left={paw.left}
          angle={paw.angle}
          flag={paw.flag}
        />
      ))}
    </div>
  );
});
