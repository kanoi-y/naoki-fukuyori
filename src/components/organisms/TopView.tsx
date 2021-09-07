import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const TopView: VFC = memo(() => {
  return (
    <Flex>
      <Text>Welcome</Text>
    </Flex>
  );
});
