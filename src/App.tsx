import { Box, ChakraProvider } from "@chakra-ui/react";
import { TopView } from "components/organisms/TopView";

// const theme = extendTheme({
//   fonts: {
//     heading: "righteous",
//   },
// });

function App() {
  return (
    <ChakraProvider>
      <Box bg="#f2f2f2" w="100%" h="100vh">
        <TopView />
      </Box>
    </ChakraProvider>
  );
}

export default App;
