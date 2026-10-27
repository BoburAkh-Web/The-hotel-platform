import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";

const H1 = styled.h1`
  font-family: "Arial", sans-serif;
  font-size: 60px;
  font-weight: bold;
`;

const StyledApp = styled.div`
  background-color: #d5d;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The wild oasis</H1>
        <Button onClick={() => alert("salom me")}>Click me</Button>
        <Button>Click Us</Button>
      </StyledApp>
    </>
  );
}

export default App;
