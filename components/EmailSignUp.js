import React from "react";
import Input from "./Input";
import styled from "styled-components";
import VisuallyHidden from "./VisuallyHidden";

const url =
  "https://fun.us18.list-manage.com/subscribe/post?u=48db0395ef9f244b4dda52e1e&amp;id=3945ea8f6f";

const Button = styled.button`
  display: block;
  background: rgb(0, 113, 227);
  border-radius: 0.5em;
  font-size: 1em;
  color: white;
  padding: 0.75em;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  border: 1px solid rgb(0, 113, 227);
  margin-bottom: 0;
  margin-top: auto;
  width: 100%;
  @media (min-width: 35rem) {
    max-width: 6em;
  }
  &:hover {
    background: rgb(0, 100, 200);
  }
`;

const Container = styled.div`
  grid-column: 1 / 4;
  text-align: center;
  @media (max-width: 35rem) {
    grid-column: 1;
    grid-row: 2;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  @media (max-width: 35rem) {
    flex-direction: column;
    & > * + * {
      margin-top: 0.5em;
    }
  }
  @media (min-width: 35rem) {
    & > * + * {
      margin-left: 0.5em;
    }
  }
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 3em;
`;

const InputContainer = styled.div`
  width: 100%;
  @media (min-width: 35rem) {
    max-width: 20em;
  }

  flex-grow: 1;
`;

export default function EmailSignUp() {
  return (
    <Container>
      <h3>Sign up for an email when I release a new game.</h3>
      <StyledForm action={url} method="post" target="_blank">
        <VisuallyHidden>
          <label for="EMAIL">Email</label>
        </VisuallyHidden>
        <InputContainer>
          <Input
            id="email"
            name="EMAIL"
            type="email"
            placeholder="Email"
            required
          />
        </InputContainer>
        <Button type="submit">Submit</Button>
      </StyledForm>
    </Container>
  );
}
