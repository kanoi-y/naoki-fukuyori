import { About } from "components/organisms/About";
import { TopView } from "components/organisms/TopView";
import styled from "styled-components";

function App() {
  return (
    <SWrapBox>
      <TopView />
      <About />
    </SWrapBox>
  );
}

const SWrapBox = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  position: relative;
`;

export default App;
