import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.75em;
  font-size: 1em;
  border-radius: 0.5em;
  border: 1px solid rgb(0, 113, 227);
  width: 100%;
  ${(props) => props.width && `width: ${props.width};`}
`;

export default function Input(props) {
  return <StyledInput {...props} />;
}
