import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: #d5d;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The wild oasis</Heading>
        <Heading as="h2">The wild oasis</Heading>
        <Heading as="h3">The wild oasis</Heading>
        <Button onClick={() => alert("salom me")}>Click me</Button>
        <Button>Click Us</Button>
      </StyledApp>
    </>
  );
}

export default App;
