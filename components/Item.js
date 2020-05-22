import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0.5em 0;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 2em;
`;

const Body = styled.div`
  margin-left: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8em;
`;

const Link = styled.a`
  color: rgb(0, 113, 227);
  text-decoration: none;
  &:visited {
    color: rgb(0, 113, 227);
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Name = styled.div`
  font-weight: 700;
`;
export default function Item({ avatar, name, description, link }) {
  return (
    <Container>
      <AvatarContainer>
        <Avatar src={avatar} alt="" />
      </AvatarContainer>
      <Body>
        <Name>
          <Link href={link}>{name}</Link>
        </Name>
        <span>{description}</span>
      </Body>
    </Container>
  );
}
