import { Box, ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { TopView } from "./components/organisms/TopView";

function App() {
  return (
    <ChakraProvider>
      <Box bg="#f2f2f2">
        <TopView />
      </Box>
    </ChakraProvider>
  );
}

export default App;
