import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: #d5d; */
  padding: 30px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">The wild oasis</Heading>
          <div>
            <Heading as="h2">Click me and us</Heading>
            <Button onClick={() => alert("salom me")}>Click me</Button>
            <Button variation="secondary" size="large">
              Click Us
            </Button>
          </div>
        </Row>
        <Row type="vertical">
          <Heading as="h3">Form</Heading>
          <form></form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
