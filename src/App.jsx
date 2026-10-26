import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Arial", sans-serif;
  font-size: 60px;
  font-weight: bold;
`;

const Button = styled.button`
  border: none;
  background: #1b1beb;
  color: white;
  font-size: 20px;
  border-radius: 6px;
  padding: 14px 18px;
  cursor: pointer;
  margin: 10px;
`;

function App() {
  return (
    <div>
      <H1>The wild oasis</H1>
      <Button onClick={() => alert("salom me")}>Click me</Button>
      <Button>Click Us</Button>
    </div>
  );
}

export default App;
