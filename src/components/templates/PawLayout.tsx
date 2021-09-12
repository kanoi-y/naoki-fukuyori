export const PawLayout = () => {
  return <p></p>;
}

// import { Paw } from "components/atoms/Paw";
// import { memo, ReactNode, useCallback, useState, VFC } from "react";
// import { PawType } from "types/pawType";

// type Props = {
//   children: ReactNode;
// };

// export const PawLayout: VFC<Props> = memo((props) => {
//   const { children } = props;

//   const [pawArray, setPawArray] = useState<PawType[]>([]);
//   // const [pawCount, setPawCount] = useState(1);
//   const [lastAngle, setLastAngle] = useState<PawType["angle"]>(180);
//   const [lastLeftRight, setLastLeftRight] = useState<PawType["left"]>(0);
//   const [lastLeftLeft, setLastLeftLeft] = useState<PawType["left"]>(70);

//   const scrollDisplayPaw = useCallback(() => {
//     const scrollTop = window.pageYOffset;

//     if (scrollTop < 50) return;

//     const pawCount = Math.floor((scrollTop - 50) / 8) + 1;

//     // pawの許容量が現在のpawArrayより上回った時に下の処理を実行する
//     if (pawCount <= pawArray.length) return;
//     console.log(pawArray);

//     const parity = pawCount % 2 === 0 ? "左足" : "右足";
//     const top = 50 + (pawCount - 1) * 8;

//     let angle: PawType["angle"];
//     let left: PawType["left"];

//     if (parity === "左足") {
//       if (lastAngle === 225) {
//         angle = Math.floor(Math.random() * 2) + 1 === 1 ? 225 : 180;
//         left = lastLeftLeft - 35;
//       } else if (lastAngle === 180) {
//         angle = Math.floor(Math.random() * 2) + 1 === 1 ? 225 : 180;
//         left = lastLeftLeft;
//       } else {
//         angle = lastAngle;
//         left = lastLeftLeft + 35;
//       }
//     } else {
//       if (lastAngle === 225) {
//         angle = lastAngle;
//         left = lastLeftRight - 35;
//       } else if (lastAngle === 180) {
//         angle = Math.floor(Math.random() * 2) + 1 === 1 ? 135 : 180;
//         left = lastLeftRight;
//       } else {
//         angle = Math.floor(Math.random() * 2) + 1 === 1 ? 135 : 180;
//         left = lastLeftRight + 35;
//       }
//     }

//     setPawArray([...pawArray, { top, left, angle, flag: true }]);
//     // setTimeout(() => {
//     //   const newPawArray = pawArray.map((paw, i) => {
//     //     if (i !== pawArray.length - 1) return paw;
//     //     const newPaw: PawType = {
//     //       top: paw.top,
//     //       left: paw.left,
//     //       angle: paw.angle,
//     //       flag: true,
//     //     };
//     //     return newPaw;
//     //   });
//     //   setPawArray(newPawArray);
//     // }, 1);

//     setLastAngle(angle);
//     if (parity === "左足") {
//       setLastLeftLeft(left);
//     } else {
//       setLastLeftRight(left);
//     }
//     // setPawCount(pawCount + 1);
//   }, [pawArray, lastAngle, lastLeftLeft, lastLeftRight]);

//   // useEffect(() => {
//   //   setPawArray([
//   //     { top: 50, left: 0, angle: 180, flag: false },
//   //     { top: 58, left: 70, angle: 180, flag: false },
//   //     { top: 66, left: 0, angle: 180, flag: false },
//   //     { top: 74, left: 70, angle: 180, flag: false },
//   //     { top: 82, left: 0, angle: 180, flag: false },
//   //     { top: 90, left: 70, angle: 180, flag: false },
//   //     { top: 98, left: 0, angle: 180, flag: false },
//   //   ]);
//   // }, []);

//   // useEffect(() => {
//   //   document.addEventListener("scroll", scrollDisplayPaw, { passive: true });
//   //   return () => {
//   //     document.removeEventListener("scroll", scrollDisplayPaw);
//   //   };
//   // }, [scrollDisplayPaw]);

//   return (
//     <div>
//       {children}
//       {pawArray.map((paw, i) => (
//         <Paw
//           key={i}
//           top={paw.top}
//           left={paw.left}
//           angle={paw.angle}
//           flag={paw.flag}
//         />
//       ))}
//     </div>
//   );
// });
