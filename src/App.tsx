import { About } from "components/organisms/About";
import { TopView } from "components/organisms/TopView";
import { CatLayout } from "components/templates/CatLayout";
import styled from "styled-components";

function App() {
  return (
    <SWrapBox>
      <CatLayout>
        <TopView />
        <About />
      </CatLayout>
    </SWrapBox>
  );
}

const SWrapBox = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export default App;
