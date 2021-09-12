import { Cat } from "components/atoms/Cat";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const CatLayout: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <div>
      {children}
      <Cat />
    </div>
  );
});
