import { Heading } from "@chakra-ui/layout";
import { Flex, Image } from "@chakra-ui/react";
import "@fontsource/righteous";
import AngleDoubleDown from "images/angle-double-down-solid.svg";
import { memo, VFC } from "react";

export const TopView: VFC = memo(() => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        fontSize="45px"
        fontWeight="bold"
        fontStyle="italic"
        mb="40px"
        style={{ fontFamily: "Righteous" }}
      >
        Welcome
      </Heading>
      <Image src={AngleDoubleDown} w="50px" opacity="0.6" />
    </Flex>
  );
});
