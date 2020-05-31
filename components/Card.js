import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
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
  position: absolute;
  top: 0;
`;
const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    padding-top: 100%; /*What you want the height to be in relation to the width*/
  }
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
      <ImageWrapper>
        <Image src={image} alt="" />
      </ImageWrapper>
      <Title>{title}</Title>
      <div>{children}</div>
      <ButtonLink href={link}>{buttonText}</ButtonLink>
    </Container>
  );
}
