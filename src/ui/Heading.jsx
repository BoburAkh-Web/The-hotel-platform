import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 70px;
      font-weight: bold;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 40px;
      font-weight: bold;
      color: green;
    `}

      ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 20px;
      font-weight: bold;
      color: pink;
    `}
  font-family: "Arial", sans-serif;
`;

export default Heading;
