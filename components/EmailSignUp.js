import React from "react";
import Input from "./Input";
import styled from "styled-components";
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
  &:hover {
    background: rgb(0, 100, 200);
  }
`;
const Container = styled.div`
  grid-column: 1 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  & > * + * {
    margin-left: 0.5em;
  }
  margin-bottom: 3em;
`;

const submitForm = async (email) => {
  const result = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    bdy: JSON.stringify({
      EMAIL: email,
      b_48db0395ef9f244b4dda52e1e_3945ea8f6f: "",
    }), // body data type must match "Content-Type" header
  });

  console.log(result);
};

export default function EmailSignUp() {
  return (
    <Container>
      <h3>Sign up for an email when I release a new game.</h3>
      <StyledForm action={url} method="post" target="_blank">
        <Input
          id="email"
          name="EMAIL"
          type="email"
          width="20em"
          placeholder="Email"
          required
        />
        <Button type="submit">Submit</Button>
      </StyledForm>
    </Container>
  );
}
