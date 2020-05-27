import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonLink = styled.a`
  display: block;
  background: rgb(0, 113, 227);
  border-radius: 0.5em;
  font-size: 1em;
  color: white;
  padding: 0.75em;
  font-weight: 400;
  width: 100%;
  cursor: pointer;
  text-align: center;
  margin-bottom: 0;
  margin-top: auto;
  &:hover {
    background: rgb(0, 100, 200);
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h3`
  margin-bottom: 0;
`;

export default function Card({
  title,
  link,
  image,
  children,
  buttonText = "Play",
}) {
  return (
    <Container>
      <Image src={image} />
      <Title>{title}</Title>
      <div>{children}</div>
      <ButtonLink href={link}>{buttonText}</ButtonLink>
    </Container>
  );
}
